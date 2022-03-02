import 'package:flutter/material.dart';

import '../enums/orientation_type.dart';

/// Provides a builder function for a landscape and portrait widget
class OrientationLayoutBuilder extends StatelessWidget {
  final WidgetBuilder? landscape;
  final WidgetBuilder portrait;
  final OrientationType orientatioType;

  const OrientationLayoutBuilder({
    required this.portrait,
    this.orientatioType = OrientationType.auto,
    this.landscape,
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) => Builder(
        builder: (context) {
          if (orientatioType != OrientationType.portrait &&
              (MediaQuery.of(context).orientation == Orientation.landscape ||
                  orientatioType == OrientationType.landscape)) {
            if (landscape != null) {
              return landscape!(context);
            }
          }

          return portrait(context);
        },
      );
}
