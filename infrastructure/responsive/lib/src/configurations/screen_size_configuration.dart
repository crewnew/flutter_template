import 'package:flutter/material.dart';

import '../enums/screen_type.dart';
import '../enums/size_type.dart';

/// Contains sizing information to make responsive choices for the current screen
class ScreenSizeConfiguration {
  final ScreenType screenType;
  final SizeType sizeType;
  final Size screenSize;
  final Size localWidgetSize;

  bool get isMobile => screenType == ScreenType.mobile;

  bool get isTablet => screenType == ScreenType.tablet;

  bool get isDesktop => screenType == ScreenType.desktop;

  bool get isWatch => screenType == ScreenType.watch;

  bool get isAtLeastDesktop => [ScreenType.desktop].contains(screenType);

  bool get isAtLeastTablet =>
      [ScreenType.desktop, ScreenType.tablet].contains(screenType);

  bool get isAtLeastMobile => [
        ScreenType.desktop,
        ScreenType.tablet,
        ScreenType.mobile
      ].contains(screenType);

  // Refined

  bool get isExtraLarge => sizeType == SizeType.extraLarge;

  bool get isLarge => sizeType == SizeType.large;

  bool get isNormal => sizeType == SizeType.normal;

  bool get isSmall => sizeType == SizeType.small;

  ScreenSizeConfiguration({
    required this.screenType,
    required this.sizeType,
    required this.screenSize,
    required this.localWidgetSize,
  });

  @override
  String toString() =>
      'DeviceType:$screenType RefinedSize:$sizeType ScreenSize:$screenSize LocalWidgetSize:$localWidgetSize';
}
