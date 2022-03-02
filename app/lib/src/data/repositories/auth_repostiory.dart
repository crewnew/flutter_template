import 'dart:async';

import 'package:app/src/data/repositories/local_repository.dart';
import 'package:core/core.dart';

class AuthRepository implements AuthStore {
  final LocalRepository _localRepository;

  AuthRepository({required LocalRepository localRepository}) : _localRepository = localRepository;

  @override
  FutureOr<String?> getString(String key) => _localRepository.query(key);

  @override
  FutureOr<void> removeItem(String key) => _localRepository.delete(key);

  @override
  FutureOr<void> setString(String key, String value) => _localRepository.mutate(key, value);
}
