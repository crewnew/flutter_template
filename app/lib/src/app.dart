import 'package:app/src/providers.dart';
import 'package:core/core.dart';
import 'package:app/src/presentation/widgets/page_layout.dart';
import 'package:flutter/material.dart';

class MyApp extends HookConsumerWidget {
  final RouterDelegate<Object> routerDelegate;
  final RouteInformationParser<Object> routeInformationParser;

  const MyApp({
    Key? key,
    required this.routerDelegate,
    required this.routeInformationParser,
  }) : super(key: key);

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final nhost = ref.watch(nhostClientPOD);
    // TODO: Change the app title name
    return NhostGraphQLProvider(
      nhostClient: nhost,
      gqlEndpointUrl: '$kApiEndpointUrl/v1/graphql',
      child: NhostAuthProvider(
        auth: nhost.auth,
        child: MaterialApp.router(
          title: 'Template',
          debugShowCheckedModeBanner: false,
          routeInformationParser: routeInformationParser,
          routerDelegate: routerDelegate,
          theme: AppTheme.light,
          builder: (context, child) {
            return PageLayout(
              child: child,
            );
          },
        ),
      ),
    );
  }
}
