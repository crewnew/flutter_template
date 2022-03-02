import 'package:flutter/widgets.dart';

import '../../responsive.dart';

/// A widget with a builder that provides you with the screenSizeConfiguration
///
/// This widget is used by the ScreenTypeLayoutBuilder to provide different widget builders
class ResponsiveLayoutBuilder extends StatelessWidget {
  final Widget Function(
          BuildContext context, ScreenSizeConfiguration screenSizeConfiguration)
      builder;
  final ScreenBreakpoint? screenBreakpoints;
  final ScreenSizeBreakpoint? screenSizeBreakpoints;

  const ResponsiveLayoutBuilder({
    required this.builder,
    this.screenBreakpoints,
    this.screenSizeBreakpoints,
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) => LayoutBuilder(
        builder: (context, boxConstraints) => builder(
          context,
          ScreenSizeConfiguration(
            screenType:
                getScreenType(MediaQuery.of(context).size, screenBreakpoints),
            sizeType: getSizeType(
              MediaQuery.of(context).size,
              screenSizeBreakpoint: screenSizeBreakpoints,
            ),
            screenSize: MediaQuery.of(context).size,
            localWidgetSize:
                Size(boxConstraints.maxWidth, boxConstraints.maxHeight),
          ),
        ),
      );
}
