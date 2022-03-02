import 'package:app/src/config/routes.dart';
import 'package:app/src/data/repositories/auth_repostiory.dart';
import 'package:app/src/data/repositories/local_repository.dart';
import 'package:core/core.dart';

final graphqlClientPOD = Provider<GraphQLClient>((ref) {
  final nhostClient = ref.watch(nhostClientPOD);
  return createNhostGraphQLClient(nhostClient);
});

final nhostClientPOD = Provider((ref) {
  final authRepository = ref.watch(authRepositoryPOD);
  return NhostClient(
    authStore: authRepository,
    backendUrl: kApiEndpointUrl,
  );
});

final authRepositoryPOD = Provider((ref) {
  final localRepository = ref.watch(localRepositoryPOD);
  return AuthRepository(
    localRepository: localRepository,
  );
});

final localRepositoryPOD = Provider((ref) {
  return LocalRepository();
});

final routerDelegatePOD = Provider((ref) {
  final routerGuards = ref.watch(routerGuardsPOD);

  return BeamerDelegate(
    initialPath: '/home',
    locationBuilder: (routeInformation, parameters) => AppRoutes(routeInformation),
    guards: routerGuards,
    transitionDelegate: const NoAnimationTransitionDelegate(),
    beamBackTransitionDelegate: const NoAnimationTransitionDelegate(),
    removeDuplicateHistory: true,
    setBrowserTabTitle: true,
  );
});

final routeInformationParserPOD = Provider((ref) => BeamerParser());

final routerGuardsPOD = Provider((ref) {
  final nhostClient = ref.read(nhostClientPOD);

  return [
    /// if the user is authenticated
    /// else send them to /sign-in
    BeamGuard(
      pathPatterns: ['/home'],
      check: (context, state) => nhostClient.auth.authenticationState == AuthenticationState.signedIn,
      beamToNamed: (_, __) => '/sign-in',
    ),

    /// if the user is anything other than authenticated
    /// else send them to /home
    BeamGuard(
      pathPatterns: ['/sign-in'],
      check: (context, state) => nhostClient.auth.authenticationState != AuthenticationState.signedIn,
      beamToNamed: (_, __) => '/home',
    ),
  ];
});
