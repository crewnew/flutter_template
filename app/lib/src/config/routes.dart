import 'package:core/core.dart';
import 'package:app/src/presentation/pages/home/home_page.dart';
import 'package:app/src/presentation/pages/sign_in/sign_in_page.dart';
import 'package:flutter/material.dart';

class AppRoutes extends BeamLocation<BeamState> {
  AppRoutes(RouteInformation routeInformation) : super(routeInformation);

  @override
  List<Pattern> get pathPatterns => [
        '/sign-in',
        '/home',
      ];

  @override
  List<BeamPage> buildPages(BuildContext context, BeamState state) {
    final paths = state.uri.pathSegments;

    return [
      if (paths.contains('sign-in'))
        const BeamPage(
          key: ValueKey('sign-in-page'),
          title: 'SignIn',
          child: SignInPage(),
        ),
      if (paths.contains('home'))
        const BeamPage(
          key: ValueKey('home-page'),
          title: 'Home',
          child: HomePage(),
        ),
    ];
  }
}
