// ignore_for_file: depend_on_referenced_packages, library_private_types_in_public_api

import 'package:core/src/src.dart';
import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:nhost_flutter_auth/nhost_flutter_auth.dart';

/// Provides a [GraphQLProvider] to this widget's subtree, configured to access
/// Nhost.
///
/// Nhost authentication information can be provided to the
/// [NhostGraphQLProvider] in one of two ways:
///
/// 1. By supplying the [nhostClient] argument.
/// 2. Through an [NhostAuthProvider] widget somewhere in this widget's
///    ancestry.
///
/// In either case, authentication changes are observed, and any changes will
/// update the GraphQL client accordingly.
class NhostGraphQLProvider extends StatefulWidget {
  NhostGraphQLProvider({
    Key? key,
    this.nhostClient,
    String? gqlEndpointUrl,
    this.child,
  })  : assert(nhostClient != null || gqlEndpointUrl != null),
        gqlEndpointUrl = gqlEndpointUrl ?? nhostClient!.gqlEndpointUrl,
        super(key: key);

  /// The Nhost GQL URL
  final String gqlEndpointUrl;

  /// Optional. If not provided, the necessary information will be requested
  /// from ancestry using [NhostAuth.of(BuildContext)]
  final NhostClient? nhostClient;
  final Widget? child;

  @override
  _NhostGraphQLProviderState createState() => _NhostGraphQLProviderState();
}

class _NhostGraphQLProviderState extends State<NhostGraphQLProvider> {
  ValueNotifier<GraphQLClient>? clientNotifier;
  AuthClient? _lastAuth;

  @override
  void initState() {
    super.initState();
  }

  AuthClient get currentNhostAuth {
    final auth = widget.nhostClient?.auth ?? NhostAuthProvider.of(context);

    assert(() {
      if (auth == null) {
        throw FlutterError.fromParts([
          ErrorSummary('Cannot find Nhost authentication.'),
          ErrorDescription(
            'NhostGraphQLProvider not provided with authentication '
            'information. Either construct the widget by providing the '
            'nhostClient argument, or ensure an NhostAuthProvider widget is '
            'somewhere in the widget\'s ancestry.',
          ),
        ]);
      }
      return true;
    }());

    return auth!;
  }

  @override
  void didUpdateWidget(covariant NhostGraphQLProvider oldWidget) {
    super.didUpdateWidget(oldWidget);
    _rebuildGraphQLClientIfNecessary(
        force: widget.gqlEndpointUrl != oldWidget.gqlEndpointUrl);
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    _rebuildGraphQLClientIfNecessary();
  }

  /// If the Auth instance doesn't change, we don't need to rebuild the GraphQL
  /// client, as the `Link`s constructed in [createNhostGraphQLClientForAuth]
  /// will automatically reflect authentication state.
  ///
  /// If the instance changes, it means we're dealing with an entirely new
  /// client, and the `Link`s themselves need rebuilding.
  void _rebuildGraphQLClientIfNecessary({bool force = false}) {
    final currentAuth = currentNhostAuth;
    if (force || _lastAuth != currentAuth) {
      final client = createNhostGraphQLClientForAuth(
        widget.gqlEndpointUrl,
        _lastAuth = currentAuth,
      );
      if (clientNotifier == null) {
        clientNotifier = ValueNotifier(client);
      } else {
        clientNotifier!.value = client;
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return GraphQLProvider(
      client: clientNotifier as ValueNotifier<GraphQLClient>,
      child: widget.child != null
          ? NhostAuthProvider(
              auth: currentNhostAuth,
              child: widget.child!,
            )
          : null,
    );
  }
}
