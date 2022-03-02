import 'package:flutter/foundation.dart';

String describeGraphQLEnum(Object? value) {
  if (value == null) return '';
  return describeEnum(value)
      .replaceAll('_', ' ')
      .toString()
      .toLowerCase()
      .capitalizeAll();
}

extension StringExtension on String {
  String capitalize() => '${this[0].toUpperCase()}${substring(1)}';
  String capitalizeAll() => split(' ').map((s) => s.capitalize()).join(' ');
}
