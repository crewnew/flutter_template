import 'package:codegen/src/scalars/coercers.dart';
import 'package:gql/ast.dart';
import 'package:graphql/client.dart' as graphql;

class FragmentUser {
  FragmentUser({
    required this.id,
    required this.avatarUrl,
    required this.displayName,
    this.email,
    required this.locale,
    this.metadata,
    this.phoneNumber,
    this.lastSeen,
    required this.createdAt,
    required this.$__typename,
  });

  factory FragmentUser.fromJson(Map<String, dynamic> json) {
    final l$id = json['id'];
    final l$avatarUrl = json['avatarUrl'];
    final l$displayName = json['displayName'];
    final l$email = json['email'];
    final l$locale = json['locale'];
    final l$metadata = json['metadata'];
    final l$phoneNumber = json['phoneNumber'];
    final l$lastSeen = json['lastSeen'];
    final l$createdAt = json['createdAt'];
    final l$$__typename = json['__typename'];
    return FragmentUser(
      id: (l$id as String),
      avatarUrl: (l$avatarUrl as String),
      displayName: (l$displayName as String),
      email: (l$email as String?),
      locale: (l$locale as String),
      metadata: (l$metadata as Map<String, dynamic>?),
      phoneNumber: (l$phoneNumber as String?),
      lastSeen: l$lastSeen == null
          ? null
          : fromGraphQLTimestamptzToDartDateTime(l$lastSeen),
      createdAt: fromGraphQLTimestamptzToDartDateTime(l$createdAt),
      $__typename: (l$$__typename as String),
    );
  }

  final String id;

  final String avatarUrl;

  final String displayName;

  final String? email;

  final String locale;

  final Map<String, dynamic>? metadata;

  final String? phoneNumber;

  final DateTime? lastSeen;

  final DateTime createdAt;

  final String $__typename;

  Map<String, dynamic> toJson() {
    final _resultData = <String, dynamic>{};
    final l$id = id;
    _resultData['id'] = l$id;
    final l$avatarUrl = avatarUrl;
    _resultData['avatarUrl'] = l$avatarUrl;
    final l$displayName = displayName;
    _resultData['displayName'] = l$displayName;
    final l$email = email;
    _resultData['email'] = l$email;
    final l$locale = locale;
    _resultData['locale'] = l$locale;
    final l$metadata = metadata;
    _resultData['metadata'] = l$metadata;
    final l$phoneNumber = phoneNumber;
    _resultData['phoneNumber'] = l$phoneNumber;
    final l$lastSeen = lastSeen;
    _resultData['lastSeen'] = l$lastSeen == null
        ? null
        : fromDartDateTimeToGraphQLTimestamptz(l$lastSeen);
    final l$createdAt = createdAt;
    _resultData['createdAt'] =
        fromDartDateTimeToGraphQLTimestamptz(l$createdAt);
    final l$$__typename = $__typename;
    _resultData['__typename'] = l$$__typename;
    return _resultData;
  }

  @override
  int get hashCode {
    final l$id = id;
    final l$avatarUrl = avatarUrl;
    final l$displayName = displayName;
    final l$email = email;
    final l$locale = locale;
    final l$metadata = metadata;
    final l$phoneNumber = phoneNumber;
    final l$lastSeen = lastSeen;
    final l$createdAt = createdAt;
    final l$$__typename = $__typename;
    return Object.hashAll([
      l$id,
      l$avatarUrl,
      l$displayName,
      l$email,
      l$locale,
      l$metadata,
      l$phoneNumber,
      l$lastSeen,
      l$createdAt,
      l$$__typename,
    ]);
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) {
      return true;
    }
    if (!(other is FragmentUser) || runtimeType != other.runtimeType) {
      return false;
    }
    final l$id = id;
    final lOther$id = other.id;
    if (l$id != lOther$id) {
      return false;
    }
    final l$avatarUrl = avatarUrl;
    final lOther$avatarUrl = other.avatarUrl;
    if (l$avatarUrl != lOther$avatarUrl) {
      return false;
    }
    final l$displayName = displayName;
    final lOther$displayName = other.displayName;
    if (l$displayName != lOther$displayName) {
      return false;
    }
    final l$email = email;
    final lOther$email = other.email;
    if (l$email != lOther$email) {
      return false;
    }
    final l$locale = locale;
    final lOther$locale = other.locale;
    if (l$locale != lOther$locale) {
      return false;
    }
    final l$metadata = metadata;
    final lOther$metadata = other.metadata;
    if (l$metadata != lOther$metadata) {
      return false;
    }
    final l$phoneNumber = phoneNumber;
    final lOther$phoneNumber = other.phoneNumber;
    if (l$phoneNumber != lOther$phoneNumber) {
      return false;
    }
    final l$lastSeen = lastSeen;
    final lOther$lastSeen = other.lastSeen;
    if (l$lastSeen != lOther$lastSeen) {
      return false;
    }
    final l$createdAt = createdAt;
    final lOther$createdAt = other.createdAt;
    if (l$createdAt != lOther$createdAt) {
      return false;
    }
    final l$$__typename = $__typename;
    final lOther$$__typename = other.$__typename;
    if (l$$__typename != lOther$$__typename) {
      return false;
    }
    return true;
  }
}

extension UtilityExtension$FragmentUser on FragmentUser {
  CopyWith$FragmentUser<FragmentUser> get copyWith => CopyWith$FragmentUser(
        this,
        (i) => i,
      );
}

abstract class CopyWith$FragmentUser<TRes> {
  factory CopyWith$FragmentUser(
    FragmentUser instance,
    TRes Function(FragmentUser) then,
  ) = _CopyWithImpl$FragmentUser;

  factory CopyWith$FragmentUser.stub(TRes res) = _CopyWithStubImpl$FragmentUser;

  TRes call({
    String? id,
    String? avatarUrl,
    String? displayName,
    String? email,
    String? locale,
    Map<String, dynamic>? metadata,
    String? phoneNumber,
    DateTime? lastSeen,
    DateTime? createdAt,
    String? $__typename,
  });
}

class _CopyWithImpl$FragmentUser<TRes> implements CopyWith$FragmentUser<TRes> {
  _CopyWithImpl$FragmentUser(
    this._instance,
    this._then,
  );

  final FragmentUser _instance;

  final TRes Function(FragmentUser) _then;

  static const _undefined = {};

  TRes call({
    Object? id = _undefined,
    Object? avatarUrl = _undefined,
    Object? displayName = _undefined,
    Object? email = _undefined,
    Object? locale = _undefined,
    Object? metadata = _undefined,
    Object? phoneNumber = _undefined,
    Object? lastSeen = _undefined,
    Object? createdAt = _undefined,
    Object? $__typename = _undefined,
  }) =>
      _then(FragmentUser(
        id: id == _undefined || id == null ? _instance.id : (id as String),
        avatarUrl: avatarUrl == _undefined || avatarUrl == null
            ? _instance.avatarUrl
            : (avatarUrl as String),
        displayName: displayName == _undefined || displayName == null
            ? _instance.displayName
            : (displayName as String),
        email: email == _undefined ? _instance.email : (email as String?),
        locale: locale == _undefined || locale == null
            ? _instance.locale
            : (locale as String),
        metadata: metadata == _undefined
            ? _instance.metadata
            : (metadata as Map<String, dynamic>?),
        phoneNumber: phoneNumber == _undefined
            ? _instance.phoneNumber
            : (phoneNumber as String?),
        lastSeen: lastSeen == _undefined
            ? _instance.lastSeen
            : (lastSeen as DateTime?),
        createdAt: createdAt == _undefined || createdAt == null
            ? _instance.createdAt
            : (createdAt as DateTime),
        $__typename: $__typename == _undefined || $__typename == null
            ? _instance.$__typename
            : ($__typename as String),
      ));
}

class _CopyWithStubImpl$FragmentUser<TRes>
    implements CopyWith$FragmentUser<TRes> {
  _CopyWithStubImpl$FragmentUser(this._res);

  TRes _res;

  call({
    String? id,
    String? avatarUrl,
    String? displayName,
    String? email,
    String? locale,
    Map<String, dynamic>? metadata,
    String? phoneNumber,
    DateTime? lastSeen,
    DateTime? createdAt,
    String? $__typename,
  }) =>
      _res;
}

const fragmentDefinitionUser = FragmentDefinitionNode(
  name: NameNode(value: 'User'),
  typeCondition: TypeConditionNode(
      on: NamedTypeNode(
    name: NameNode(value: 'users'),
    isNonNull: false,
  )),
  directives: [],
  selectionSet: SelectionSetNode(selections: [
    FieldNode(
      name: NameNode(value: 'id'),
      alias: null,
      arguments: [],
      directives: [],
      selectionSet: null,
    ),
    FieldNode(
      name: NameNode(value: 'avatarUrl'),
      alias: null,
      arguments: [],
      directives: [],
      selectionSet: null,
    ),
    FieldNode(
      name: NameNode(value: 'displayName'),
      alias: null,
      arguments: [],
      directives: [],
      selectionSet: null,
    ),
    FieldNode(
      name: NameNode(value: 'email'),
      alias: null,
      arguments: [],
      directives: [],
      selectionSet: null,
    ),
    FieldNode(
      name: NameNode(value: 'locale'),
      alias: null,
      arguments: [],
      directives: [],
      selectionSet: null,
    ),
    FieldNode(
      name: NameNode(value: 'metadata'),
      alias: null,
      arguments: [],
      directives: [],
      selectionSet: null,
    ),
    FieldNode(
      name: NameNode(value: 'phoneNumber'),
      alias: null,
      arguments: [],
      directives: [],
      selectionSet: null,
    ),
    FieldNode(
      name: NameNode(value: 'lastSeen'),
      alias: null,
      arguments: [],
      directives: [],
      selectionSet: null,
    ),
    FieldNode(
      name: NameNode(value: 'createdAt'),
      alias: null,
      arguments: [],
      directives: [],
      selectionSet: null,
    ),
    FieldNode(
      name: NameNode(value: '__typename'),
      alias: null,
      arguments: [],
      directives: [],
      selectionSet: null,
    ),
  ]),
);
const documentNodeFragmentUser = DocumentNode(definitions: [
  fragmentDefinitionUser,
]);

extension ClientExtension$FragmentUser on graphql.GraphQLClient {
  void writeFragmentUser({
    required FragmentUser data,
    required Map<String, dynamic> idFields,
    bool broadcast = true,
  }) =>
      this.writeFragment(
        graphql.FragmentRequest(
          idFields: idFields,
          fragment: const graphql.Fragment(
            fragmentName: 'User',
            document: documentNodeFragmentUser,
          ),
        ),
        data: data.toJson(),
        broadcast: broadcast,
      );
  FragmentUser? readFragmentUser({
    required Map<String, dynamic> idFields,
    bool optimistic = true,
  }) {
    final result = this.readFragment(
      graphql.FragmentRequest(
        idFields: idFields,
        fragment: const graphql.Fragment(
          fragmentName: 'User',
          document: documentNodeFragmentUser,
        ),
      ),
      optimistic: optimistic,
    );
    return result == null ? null : FragmentUser.fromJson(result);
  }
}
