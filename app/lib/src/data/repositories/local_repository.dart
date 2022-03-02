import 'package:core/core.dart';

class LocalRepository {
  LocalRepository();
  Future<void> mutate(String key, String value) => SharedPreferences.getInstance().then(
        (instance) => instance.setString(key, value),
      );
  Future<String?> query(String key) async => SharedPreferences.getInstance().then(
        (instance) => instance.getString(key),
      );
  Future<void> delete(String key) => SharedPreferences.getInstance().then(
        (instance) => instance.remove(key),
      );
}
