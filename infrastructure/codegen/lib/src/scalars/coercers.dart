DateTime? fromGraphQLDateNullableToDartDateTimeNullable(String? date) =>
    DateTime.tryParse(date ?? '');

String? fromDartDateTimeNullableToGraphQLDateNullable(DateTime? date) =>
    date?.toIso8601String().substring(0, 10);

DateTime? fromGraphQLTimestamptzNullableToDartDateTimeNullable(String? date) =>
    DateTime.tryParse(date ?? '');

String? fromDartDateTimeNullableToGraphQLTimestamptzNullable(DateTime? date) =>
    date?.toIso8601String();

DateTime fromGraphQLDateToDartDateTime(String date) => DateTime.parse(date);

String fromDartDateTimeToGraphQLDate(DateTime date) => date.toIso8601String();

List<DateTime>? fromGraphQLListNullableTimestamptzToDartListNullableDateTime(
        List<String?>? list) =>
    list?.map((e) => DateTime.parse(e ?? '')).toList();

List<String?>? fromDartListNullableDateTimeToGraphQLListNullableTimestamptz(
        List<DateTime?>? list) =>
    list?.map((e) => e?.toIso8601String()).toList();

List<DateTime>? fromGraphQLListNullableDateToDartListNullableDateTime(
        List<String?>? list) =>
    list?.map((e) => DateTime.parse(e ?? '')).toList();

List<String?>? fromDartListNullableDateTimeToGraphQLListNullableDate(
        List<DateTime?>? list) =>
    list?.map((e) => e?.toIso8601String()).toList();

DateTime fromGraphQLTimestamptzToDartDateTime(dynamic date) =>
    DateTime.parse('${date}');

String fromDartDateTimeToGraphQLTimestamptz(DateTime date) =>
    date.toIso8601String();
