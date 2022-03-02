import 'package:core/core.dart';
import 'package:app/src/providers.dart';
import 'package:flutter/material.dart';

class PageLayout extends HookConsumerWidget {
  const PageLayout({Key? key, this.child}) : super(key: key);
  final Widget? child;
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final nhost = ref.watch(nhostClientPOD);
    final authentication = useState(nhost.auth.authenticationState);
    final beamer = ref.watch(routerDelegatePOD);

    useEffect(() {
      nhost.auth.addAuthStateChangedCallback((authenticationState) {
        if (authenticationState != authentication.value) {
          if (authenticationState == AuthenticationState.signedIn) {
            beamer.beamToNamed('/projects');
          } else {
            beamer.beamToNamed('/welcome');
          }
        }
        authentication.value = authenticationState;
      });
      return () {};
    });

    return Material(
      child: ResponsiveLayoutBuilder(builder: (context, screen) {
        return Row(
          children: [
            if (authentication.value == AuthenticationState.signedIn && screen.isAtLeastTablet) ...[
              //TODO: Define if we want to show the sidebar
            ],
            Expanded(child: child ?? Container()),
          ],
        );
      }),
    );
  }
}
