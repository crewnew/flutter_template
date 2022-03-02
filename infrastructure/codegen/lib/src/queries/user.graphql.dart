import '../fragments/user.graphql.dart';
import '../schema/schema.graphql.dart';
import 'package:flutter/widgets.dart' as widgets;
import 'package:gql/ast.dart';
import 'package:graphql/client.dart' as graphql;
import 'package:graphql_flutter/graphql_flutter.dart' as graphql_flutter;

class Variables$QueryUser {
  factory Variables$QueryUser({required String id}) => Variables$QueryUser._({
        r'id': id,
      });

  Variables$QueryUser._(this._$data);

  factory Variables$QueryUser.fromJson(Map<String, dynamic> data) {
    final result$data = <String, dynamic>{};
    final l$id = data['id'];
    result$data['id'] = (l$id as String);
    return Variables$QueryUser._(result$data);
  }

  Map<String, dynamic> _$data;

  String get id => (_$data['id'] as String);
  Map<String, dynamic> toJson() {
    final result$data = <String, dynamic>{};
    final l$id = id;
    result$data['id'] = l$id;
    return result$data;
  }

  CopyWith$Variables$QueryUser<Variables$QueryUser> get copyWith =>
      CopyWith$Variables$QueryUser(
        this,
        (i) => i,
      );
  @override
  bool operator ==(Object other) {
    if (identical(this, other)) {
      return true;
    }
    if (!(other is Variables$QueryUser) || runtimeType != other.runtimeType) {
      return false;
    }
    final l$id = id;
    final lOther$id = other.id;
    if (l$id != lOther$id) {
      return false;
    }
    return true;
  }

  @override
  int get hashCode {
    final l$id = id;
    return Object.hashAll([l$id]);
  }
}

abstract class CopyWith$Variables$QueryUser<TRes> {
  factory CopyWith$Variables$QueryUser(
    Variables$QueryUser instance,
    TRes Function(Variables$QueryUser) then,
  ) = _CopyWithImpl$Variables$QueryUser;

  factory CopyWith$Variables$QueryUser.stub(TRes res) =
      _CopyWithStubImpl$Variables$QueryUser;

  TRes call({String? id});
}

class _CopyWithImpl$Variables$QueryUser<TRes>
    implements CopyWith$Variables$QueryUser<TRes> {
  _CopyWithImpl$Variables$QueryUser(
    this._instance,
    this._then,
  );

  final Variables$QueryUser _instance;

  final TRes Function(Variables$QueryUser) _then;

  static const _undefined = {};

  TRes call({Object? id = _undefined}) => _then(Variables$QueryUser._({
        ..._instance._$data,
        if (id != _undefined && id != null) 'id': (id as String),
      }));
}

class _CopyWithStubImpl$Variables$QueryUser<TRes>
    implements CopyWith$Variables$QueryUser<TRes> {
  _CopyWithStubImpl$Variables$QueryUser(this._res);

  TRes _res;

  call({String? id}) => _res;
}

class QueryUser {
  QueryUser({
    this.user,
    required this.$__typename,
  });

  factory QueryUser.fromJson(Map<String, dynamic> json) {
    final l$user = json['user'];
    final l$$__typename = json['__typename'];
    return QueryUser(
      user: l$user == null
          ? null
          : FragmentUser.fromJson((l$user as Map<String, dynamic>)),
      $__typename: (l$$__typename as String),
    );
  }

  final FragmentUser? user;

  final String $__typename;

  Map<String, dynamic> toJson() {
    final _resultData = <String, dynamic>{};
    final l$user = user;
    _resultData['user'] = l$user?.toJson();
    final l$$__typename = $__typename;
    _resultData['__typename'] = l$$__typename;
    return _resultData;
  }

  @override
  int get hashCode {
    final l$user = user;
    final l$$__typename = $__typename;
    return Object.hashAll([
      l$user,
      l$$__typename,
    ]);
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) {
      return true;
    }
    if (!(other is QueryUser) || runtimeType != other.runtimeType) {
      return false;
    }
    final l$user = user;
    final lOther$user = other.user;
    if (l$user != lOther$user) {
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

extension UtilityExtension$QueryUser on QueryUser {
  CopyWith$QueryUser<QueryUser> get copyWith => CopyWith$QueryUser(
        this,
        (i) => i,
      );
}

abstract class CopyWith$QueryUser<TRes> {
  factory CopyWith$QueryUser(
    QueryUser instance,
    TRes Function(QueryUser) then,
  ) = _CopyWithImpl$QueryUser;

  factory CopyWith$QueryUser.stub(TRes res) = _CopyWithStubImpl$QueryUser;

  TRes call({
    FragmentUser? user,
    String? $__typename,
  });
  CopyWith$FragmentUser<TRes> get user;
}

class _CopyWithImpl$QueryUser<TRes> implements CopyWith$QueryUser<TRes> {
  _CopyWithImpl$QueryUser(
    this._instance,
    this._then,
  );

  final QueryUser _instance;

  final TRes Function(QueryUser) _then;

  static const _undefined = {};

  TRes call({
    Object? user = _undefined,
    Object? $__typename = _undefined,
  }) =>
      _then(QueryUser(
        user: user == _undefined ? _instance.user : (user as FragmentUser?),
        $__typename: $__typename == _undefined || $__typename == null
            ? _instance.$__typename
            : ($__typename as String),
      ));
  CopyWith$FragmentUser<TRes> get user {
    final local$user = _instance.user;
    return local$user == null
        ? CopyWith$FragmentUser.stub(_then(_instance))
        : CopyWith$FragmentUser(local$user, (e) => call(user: e));
  }
}

class _CopyWithStubImpl$QueryUser<TRes> implements CopyWith$QueryUser<TRes> {
  _CopyWithStubImpl$QueryUser(this._res);

  TRes _res;

  call({
    FragmentUser? user,
    String? $__typename,
  }) =>
      _res;
  CopyWith$FragmentUser<TRes> get user => CopyWith$FragmentUser.stub(_res);
}

const documentNodeQueryUser = DocumentNode(definitions: [
  OperationDefinitionNode(
    type: OperationType.query,
    name: NameNode(value: 'User'),
    variableDefinitions: [
      VariableDefinitionNode(
        variable: VariableNode(name: NameNode(value: 'id')),
        type: NamedTypeNode(
          name: NameNode(value: 'uuid'),
          isNonNull: true,
        ),
        defaultValue: DefaultValueNode(value: null),
        directives: [],
      )
    ],
    directives: [],
    selectionSet: SelectionSetNode(selections: [
      FieldNode(
        name: NameNode(value: 'user'),
        alias: null,
        arguments: [
          ArgumentNode(
            name: NameNode(value: 'id'),
            value: VariableNode(name: NameNode(value: 'id')),
          )
        ],
        directives: [],
        selectionSet: SelectionSetNode(selections: [
          FragmentSpreadNode(
            name: NameNode(value: 'User'),
            directives: [],
          ),
          FieldNode(
            name: NameNode(value: '__typename'),
            alias: null,
            arguments: [],
            directives: [],
            selectionSet: null,
          ),
        ]),
      ),
      FieldNode(
        name: NameNode(value: '__typename'),
        alias: null,
        arguments: [],
        directives: [],
        selectionSet: null,
      ),
    ]),
  ),
  fragmentDefinitionUser,
]);
QueryUser _parserFn$QueryUser(Map<String, dynamic> data) =>
    QueryUser.fromJson(data);

class Options$QueryUser extends graphql.QueryOptions<QueryUser> {
  Options$QueryUser({
    String? operationName,
    required Variables$QueryUser variables,
    graphql.FetchPolicy? fetchPolicy,
    graphql.ErrorPolicy? errorPolicy,
    graphql.CacheRereadPolicy? cacheRereadPolicy,
    Object? optimisticResult,
    Duration? pollInterval,
    graphql.Context? context,
  }) : super(
          variables: variables.toJson(),
          operationName: operationName,
          fetchPolicy: fetchPolicy,
          errorPolicy: errorPolicy,
          cacheRereadPolicy: cacheRereadPolicy,
          optimisticResult: optimisticResult,
          pollInterval: pollInterval,
          context: context,
          document: documentNodeQueryUser,
          parserFn: _parserFn$QueryUser,
        );
}

class WatchOptions$QueryUser extends graphql.WatchQueryOptions<QueryUser> {
  WatchOptions$QueryUser({
    String? operationName,
    required Variables$QueryUser variables,
    graphql.FetchPolicy? fetchPolicy,
    graphql.ErrorPolicy? errorPolicy,
    graphql.CacheRereadPolicy? cacheRereadPolicy,
    Object? optimisticResult,
    graphql.Context? context,
    Duration? pollInterval,
    bool? eagerlyFetchResults,
    bool carryForwardDataOnException = true,
    bool fetchResults = false,
  }) : super(
          variables: variables.toJson(),
          operationName: operationName,
          fetchPolicy: fetchPolicy,
          errorPolicy: errorPolicy,
          cacheRereadPolicy: cacheRereadPolicy,
          optimisticResult: optimisticResult,
          context: context,
          document: documentNodeQueryUser,
          pollInterval: pollInterval,
          eagerlyFetchResults: eagerlyFetchResults,
          carryForwardDataOnException: carryForwardDataOnException,
          fetchResults: fetchResults,
          parserFn: _parserFn$QueryUser,
        );
}

class FetchMoreOptions$QueryUser extends graphql.FetchMoreOptions {
  FetchMoreOptions$QueryUser({
    required graphql.UpdateQuery updateQuery,
    required Variables$QueryUser variables,
  }) : super(
          updateQuery: updateQuery,
          variables: variables.toJson(),
          document: documentNodeQueryUser,
        );
}

extension ClientExtension$QueryUser on graphql.GraphQLClient {
  Future<graphql.QueryResult<QueryUser>> queryUser(
          Options$QueryUser options) async =>
      await this.query(options);
  graphql.ObservableQuery<QueryUser> watchQueryUser(
          WatchOptions$QueryUser options) =>
      this.watchQuery(options);
  void writeQueryUser({
    required QueryUser data,
    required Variables$QueryUser variables,
    bool broadcast = true,
  }) =>
      this.writeQuery(
        graphql.Request(
          operation: graphql.Operation(document: documentNodeQueryUser),
          variables: variables.toJson(),
        ),
        data: data.toJson(),
        broadcast: broadcast,
      );
  QueryUser? readQueryUser({
    required Variables$QueryUser variables,
    bool optimistic = true,
  }) {
    final result = this.readQuery(
      graphql.Request(
        operation: graphql.Operation(document: documentNodeQueryUser),
        variables: variables.toJson(),
      ),
      optimistic: optimistic,
    );
    return result == null ? null : QueryUser.fromJson(result);
  }
}

graphql_flutter.QueryHookResult<QueryUser> useQueryUser(
        Options$QueryUser options) =>
    graphql_flutter.useQuery(options);
graphql.ObservableQuery<QueryUser> useWatchQueryUser(
        WatchOptions$QueryUser options) =>
    graphql_flutter.useWatchQuery(options);

class QueryUser$Widget extends graphql_flutter.Query<QueryUser> {
  QueryUser$Widget({
    widgets.Key? key,
    required Options$QueryUser options,
    required graphql_flutter.QueryBuilder<QueryUser> builder,
  }) : super(
          key: key,
          options: options,
          builder: builder,
        );
}

class Variables$QueryUsers {
  factory Variables$QueryUsers({InputusersBoolExp? where}) =>
      Variables$QueryUsers._({
        if (where != null) r'where': where,
      });

  Variables$QueryUsers._(this._$data);

  factory Variables$QueryUsers.fromJson(Map<String, dynamic> data) {
    final result$data = <String, dynamic>{};
    if (data.containsKey('where')) {
      final l$where = data['where'];
      result$data['where'] = l$where == null
          ? null
          : InputusersBoolExp.fromJson((l$where as Map<String, dynamic>));
    }
    return Variables$QueryUsers._(result$data);
  }

  Map<String, dynamic> _$data;

  InputusersBoolExp? get where => (_$data['where'] as InputusersBoolExp?);
  Map<String, dynamic> toJson() {
    final result$data = <String, dynamic>{};
    if (_$data.containsKey('where')) {
      final l$where = where;
      result$data['where'] = l$where?.toJson();
    }
    return result$data;
  }

  CopyWith$Variables$QueryUsers<Variables$QueryUsers> get copyWith =>
      CopyWith$Variables$QueryUsers(
        this,
        (i) => i,
      );
  @override
  bool operator ==(Object other) {
    if (identical(this, other)) {
      return true;
    }
    if (!(other is Variables$QueryUsers) || runtimeType != other.runtimeType) {
      return false;
    }
    final l$where = where;
    final lOther$where = other.where;
    if (_$data.containsKey('where') != other._$data.containsKey('where')) {
      return false;
    }
    if (l$where != lOther$where) {
      return false;
    }
    return true;
  }

  @override
  int get hashCode {
    final l$where = where;
    return Object.hashAll([_$data.containsKey('where') ? l$where : const {}]);
  }
}

abstract class CopyWith$Variables$QueryUsers<TRes> {
  factory CopyWith$Variables$QueryUsers(
    Variables$QueryUsers instance,
    TRes Function(Variables$QueryUsers) then,
  ) = _CopyWithImpl$Variables$QueryUsers;

  factory CopyWith$Variables$QueryUsers.stub(TRes res) =
      _CopyWithStubImpl$Variables$QueryUsers;

  TRes call({InputusersBoolExp? where});
}

class _CopyWithImpl$Variables$QueryUsers<TRes>
    implements CopyWith$Variables$QueryUsers<TRes> {
  _CopyWithImpl$Variables$QueryUsers(
    this._instance,
    this._then,
  );

  final Variables$QueryUsers _instance;

  final TRes Function(Variables$QueryUsers) _then;

  static const _undefined = {};

  TRes call({Object? where = _undefined}) => _then(Variables$QueryUsers._({
        ..._instance._$data,
        if (where != _undefined) 'where': (where as InputusersBoolExp?),
      }));
}

class _CopyWithStubImpl$Variables$QueryUsers<TRes>
    implements CopyWith$Variables$QueryUsers<TRes> {
  _CopyWithStubImpl$Variables$QueryUsers(this._res);

  TRes _res;

  call({InputusersBoolExp? where}) => _res;
}

class QueryUsers {
  QueryUsers({
    required this.users,
    required this.$__typename,
  });

  factory QueryUsers.fromJson(Map<String, dynamic> json) {
    final l$users = json['users'];
    final l$$__typename = json['__typename'];
    return QueryUsers(
      users: (l$users as List<dynamic>)
          .map((e) => FragmentUser.fromJson((e as Map<String, dynamic>)))
          .toList(),
      $__typename: (l$$__typename as String),
    );
  }

  final List<FragmentUser> users;

  final String $__typename;

  Map<String, dynamic> toJson() {
    final _resultData = <String, dynamic>{};
    final l$users = users;
    _resultData['users'] = l$users.map((e) => e.toJson()).toList();
    final l$$__typename = $__typename;
    _resultData['__typename'] = l$$__typename;
    return _resultData;
  }

  @override
  int get hashCode {
    final l$users = users;
    final l$$__typename = $__typename;
    return Object.hashAll([
      Object.hashAll(l$users.map((v) => v)),
      l$$__typename,
    ]);
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) {
      return true;
    }
    if (!(other is QueryUsers) || runtimeType != other.runtimeType) {
      return false;
    }
    final l$users = users;
    final lOther$users = other.users;
    if (l$users.length != lOther$users.length) {
      return false;
    }
    for (int i = 0; i < l$users.length; i++) {
      final l$users$entry = l$users[i];
      final lOther$users$entry = lOther$users[i];
      if (l$users$entry != lOther$users$entry) {
        return false;
      }
    }
    final l$$__typename = $__typename;
    final lOther$$__typename = other.$__typename;
    if (l$$__typename != lOther$$__typename) {
      return false;
    }
    return true;
  }
}

extension UtilityExtension$QueryUsers on QueryUsers {
  CopyWith$QueryUsers<QueryUsers> get copyWith => CopyWith$QueryUsers(
        this,
        (i) => i,
      );
}

abstract class CopyWith$QueryUsers<TRes> {
  factory CopyWith$QueryUsers(
    QueryUsers instance,
    TRes Function(QueryUsers) then,
  ) = _CopyWithImpl$QueryUsers;

  factory CopyWith$QueryUsers.stub(TRes res) = _CopyWithStubImpl$QueryUsers;

  TRes call({
    List<FragmentUser>? users,
    String? $__typename,
  });
  TRes users(
      Iterable<FragmentUser> Function(
              Iterable<CopyWith$FragmentUser<FragmentUser>>)
          _fn);
}

class _CopyWithImpl$QueryUsers<TRes> implements CopyWith$QueryUsers<TRes> {
  _CopyWithImpl$QueryUsers(
    this._instance,
    this._then,
  );

  final QueryUsers _instance;

  final TRes Function(QueryUsers) _then;

  static const _undefined = {};

  TRes call({
    Object? users = _undefined,
    Object? $__typename = _undefined,
  }) =>
      _then(QueryUsers(
        users: users == _undefined || users == null
            ? _instance.users
            : (users as List<FragmentUser>),
        $__typename: $__typename == _undefined || $__typename == null
            ? _instance.$__typename
            : ($__typename as String),
      ));
  TRes users(
          Iterable<FragmentUser> Function(
                  Iterable<CopyWith$FragmentUser<FragmentUser>>)
              _fn) =>
      call(
          users: _fn(_instance.users.map((e) => CopyWith$FragmentUser(
                e,
                (i) => i,
              ))).toList());
}

class _CopyWithStubImpl$QueryUsers<TRes> implements CopyWith$QueryUsers<TRes> {
  _CopyWithStubImpl$QueryUsers(this._res);

  TRes _res;

  call({
    List<FragmentUser>? users,
    String? $__typename,
  }) =>
      _res;
  users(_fn) => _res;
}

const documentNodeQueryUsers = DocumentNode(definitions: [
  OperationDefinitionNode(
    type: OperationType.query,
    name: NameNode(value: 'Users'),
    variableDefinitions: [
      VariableDefinitionNode(
        variable: VariableNode(name: NameNode(value: 'where')),
        type: NamedTypeNode(
          name: NameNode(value: 'usersBoolExp'),
          isNonNull: false,
        ),
        defaultValue: DefaultValueNode(value: ObjectValueNode(fields: [])),
        directives: [],
      )
    ],
    directives: [],
    selectionSet: SelectionSetNode(selections: [
      FieldNode(
        name: NameNode(value: 'users'),
        alias: null,
        arguments: [
          ArgumentNode(
            name: NameNode(value: 'where'),
            value: VariableNode(name: NameNode(value: 'where')),
          )
        ],
        directives: [],
        selectionSet: SelectionSetNode(selections: [
          FragmentSpreadNode(
            name: NameNode(value: 'User'),
            directives: [],
          ),
          FieldNode(
            name: NameNode(value: '__typename'),
            alias: null,
            arguments: [],
            directives: [],
            selectionSet: null,
          ),
        ]),
      ),
      FieldNode(
        name: NameNode(value: '__typename'),
        alias: null,
        arguments: [],
        directives: [],
        selectionSet: null,
      ),
    ]),
  ),
  fragmentDefinitionUser,
]);
QueryUsers _parserFn$QueryUsers(Map<String, dynamic> data) =>
    QueryUsers.fromJson(data);

class Options$QueryUsers extends graphql.QueryOptions<QueryUsers> {
  Options$QueryUsers({
    String? operationName,
    Variables$QueryUsers? variables,
    graphql.FetchPolicy? fetchPolicy,
    graphql.ErrorPolicy? errorPolicy,
    graphql.CacheRereadPolicy? cacheRereadPolicy,
    Object? optimisticResult,
    Duration? pollInterval,
    graphql.Context? context,
  }) : super(
          variables: variables?.toJson() ?? {},
          operationName: operationName,
          fetchPolicy: fetchPolicy,
          errorPolicy: errorPolicy,
          cacheRereadPolicy: cacheRereadPolicy,
          optimisticResult: optimisticResult,
          pollInterval: pollInterval,
          context: context,
          document: documentNodeQueryUsers,
          parserFn: _parserFn$QueryUsers,
        );
}

class WatchOptions$QueryUsers extends graphql.WatchQueryOptions<QueryUsers> {
  WatchOptions$QueryUsers({
    String? operationName,
    Variables$QueryUsers? variables,
    graphql.FetchPolicy? fetchPolicy,
    graphql.ErrorPolicy? errorPolicy,
    graphql.CacheRereadPolicy? cacheRereadPolicy,
    Object? optimisticResult,
    graphql.Context? context,
    Duration? pollInterval,
    bool? eagerlyFetchResults,
    bool carryForwardDataOnException = true,
    bool fetchResults = false,
  }) : super(
          variables: variables?.toJson() ?? {},
          operationName: operationName,
          fetchPolicy: fetchPolicy,
          errorPolicy: errorPolicy,
          cacheRereadPolicy: cacheRereadPolicy,
          optimisticResult: optimisticResult,
          context: context,
          document: documentNodeQueryUsers,
          pollInterval: pollInterval,
          eagerlyFetchResults: eagerlyFetchResults,
          carryForwardDataOnException: carryForwardDataOnException,
          fetchResults: fetchResults,
          parserFn: _parserFn$QueryUsers,
        );
}

class FetchMoreOptions$QueryUsers extends graphql.FetchMoreOptions {
  FetchMoreOptions$QueryUsers({
    required graphql.UpdateQuery updateQuery,
    Variables$QueryUsers? variables,
  }) : super(
          updateQuery: updateQuery,
          variables: variables?.toJson() ?? {},
          document: documentNodeQueryUsers,
        );
}

extension ClientExtension$QueryUsers on graphql.GraphQLClient {
  Future<graphql.QueryResult<QueryUsers>> queryUsers(
          [Options$QueryUsers? options]) async =>
      await this.query(options ?? Options$QueryUsers());
  graphql.ObservableQuery<QueryUsers> watchQueryUsers(
          [WatchOptions$QueryUsers? options]) =>
      this.watchQuery(options ?? WatchOptions$QueryUsers());
  void writeQueryUsers({
    required QueryUsers data,
    Variables$QueryUsers? variables,
    bool broadcast = true,
  }) =>
      this.writeQuery(
        graphql.Request(
          operation: graphql.Operation(document: documentNodeQueryUsers),
          variables: variables?.toJson() ?? const {},
        ),
        data: data.toJson(),
        broadcast: broadcast,
      );
  QueryUsers? readQueryUsers({
    Variables$QueryUsers? variables,
    bool optimistic = true,
  }) {
    final result = this.readQuery(
      graphql.Request(
        operation: graphql.Operation(document: documentNodeQueryUsers),
        variables: variables?.toJson() ?? const {},
      ),
      optimistic: optimistic,
    );
    return result == null ? null : QueryUsers.fromJson(result);
  }
}

graphql_flutter.QueryHookResult<QueryUsers> useQueryUsers(
        [Options$QueryUsers? options]) =>
    graphql_flutter.useQuery(options ?? Options$QueryUsers());
graphql.ObservableQuery<QueryUsers> useWatchQueryUsers(
        [WatchOptions$QueryUsers? options]) =>
    graphql_flutter.useWatchQuery(options ?? WatchOptions$QueryUsers());

class QueryUsers$Widget extends graphql_flutter.Query<QueryUsers> {
  QueryUsers$Widget({
    widgets.Key? key,
    Options$QueryUsers? options,
    required graphql_flutter.QueryBuilder<QueryUsers> builder,
  }) : super(
          key: key,
          options: options ?? Options$QueryUsers(),
          builder: builder,
        );
}
