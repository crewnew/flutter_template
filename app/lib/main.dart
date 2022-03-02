import 'package:app/src/app.dart';
import 'package:app/src/providers.dart';
import 'package:core/core.dart';
import 'package:flutter/material.dart';

void main() async {
  // EnsureInitialized is called in the [initHiveForFlutter] method
  // WidgetsFlutterBinding.ensureInitialized();
  await initHiveForFlutter();

  final container = ProviderContainer();
  final nhostClient = container.read(nhostClientPOD);
  final routerDelegate = container.read(routerDelegatePOD);
  final routeInformationParser = container.read(routeInformationParserPOD);

  try {
    await nhostClient.auth.signInWithStoredCredentials();
  } catch (e) {
    // ignore
  }

  runApp(
    UncontrolledProviderScope(
      container: container,
      child: MyApp(
        routerDelegate: routerDelegate,
        routeInformationParser: routeInformationParser,
      ),
    ),
  );
}
