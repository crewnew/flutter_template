import '../fragments/user.graphql.dart';
import '../schema/schema.graphql.dart';
import 'dart:async';
import 'package:flutter/widgets.dart' as widgets;
import 'package:gql/ast.dart';
import 'package:graphql/client.dart' as graphql;
import 'package:graphql_flutter/graphql_flutter.dart' as graphql_flutter;

class Variables$MutationUpdateUser {
  factory Variables$MutationUpdateUser({
    String? id,
    InputusersSetInput? input,
  }) =>
      Variables$MutationUpdateUser._({
        if (id != null) r'id': id,
        if (input != null) r'input': input,
      });

  Variables$MutationUpdateUser._(this._$data);

  factory Variables$MutationUpdateUser.fromJson(Map<String, dynamic> data) {
    final result$data = <String, dynamic>{};
    if (data.containsKey('id')) {
      final l$id = data['id'];
      result$data['id'] = (l$id as String?);
    }
    if (data.containsKey('input')) {
      final l$input = data['input'];
      result$data['input'] = l$input == null
          ? null
          : InputusersSetInput.fromJson((l$input as Map<String, dynamic>));
    }
    return Variables$MutationUpdateUser._(result$data);
  }

  Map<String, dynamic> _$data;

  String? get id => (_$data['id'] as String?);
  InputusersSetInput? get input => (_$data['input'] as InputusersSetInput?);
  Map<String, dynamic> toJson() {
    final result$data = <String, dynamic>{};
    if (_$data.containsKey('id')) {
      final l$id = id;
      result$data['id'] = l$id;
    }
    if (_$data.containsKey('input')) {
      final l$input = input;
      result$data['input'] = l$input?.toJson();
    }
    return result$data;
  }

  CopyWith$Variables$MutationUpdateUser<Variables$MutationUpdateUser>
      get copyWith => CopyWith$Variables$MutationUpdateUser(
            this,
            (i) => i,
          );
  @override
  bool operator ==(Object other) {
    if (identical(this, other)) {
      return true;
    }
    if (!(other is Variables$MutationUpdateUser) ||
        runtimeType != other.runtimeType) {
      return false;
    }
    final l$id = id;
    final lOther$id = other.id;
    if (_$data.containsKey('id') != other._$data.containsKey('id')) {
      return false;
    }
    if (l$id != lOther$id) {
      return false;
    }
    final l$input = input;
    final lOther$input = other.input;
    if (_$data.containsKey('input') != other._$data.containsKey('input')) {
      return false;
    }
    if (l$input != lOther$input) {
      return false;
    }
    return true;
  }

  @override
  int get hashCode {
    final l$id = id;
    final l$input = input;
    return Object.hashAll([
      _$data.containsKey('id') ? l$id : const {},
      _$data.containsKey('input') ? l$input : const {},
    ]);
  }
}

abstract class CopyWith$Variables$MutationUpdateUser<TRes> {
  factory CopyWith$Variables$MutationUpdateUser(
    Variables$MutationUpdateUser instance,
    TRes Function(Variables$MutationUpdateUser) then,
  ) = _CopyWithImpl$Variables$MutationUpdateUser;

  factory CopyWith$Variables$MutationUpdateUser.stub(TRes res) =
      _CopyWithStubImpl$Variables$MutationUpdateUser;

  TRes call({
    String? id,
    InputusersSetInput? input,
  });
}

class _CopyWithImpl$Variables$MutationUpdateUser<TRes>
    implements CopyWith$Variables$MutationUpdateUser<TRes> {
  _CopyWithImpl$Variables$MutationUpdateUser(
    this._instance,
    this._then,
  );

  final Variables$MutationUpdateUser _instance;

  final TRes Function(Variables$MutationUpdateUser) _then;

  static const _undefined = {};

  TRes call({
    Object? id = _undefined,
    Object? input = _undefined,
  }) =>
      _then(Variables$MutationUpdateUser._({
        ..._instance._$data,
        if (id != _undefined) 'id': (id as String?),
        if (input != _undefined) 'input': (input as InputusersSetInput?),
      }));
}

class _CopyWithStubImpl$Variables$MutationUpdateUser<TRes>
    implements CopyWith$Variables$MutationUpdateUser<TRes> {
  _CopyWithStubImpl$Variables$MutationUpdateUser(this._res);

  TRes _res;

  call({
    String? id,
    InputusersSetInput? input,
  }) =>
      _res;
}

class MutationUpdateUser {
  MutationUpdateUser({
    this.updateUser,
    required this.$__typename,
  });

  factory MutationUpdateUser.fromJson(Map<String, dynamic> json) {
    final l$updateUser = json['updateUser'];
    final l$$__typename = json['__typename'];
    return MutationUpdateUser(
      updateUser: l$updateUser == null
          ? null
          : FragmentUser.fromJson((l$updateUser as Map<String, dynamic>)),
      $__typename: (l$$__typename as String),
    );
  }

  final FragmentUser? updateUser;

  final String $__typename;

  Map<String, dynamic> toJson() {
    final _resultData = <String, dynamic>{};
    final l$updateUser = updateUser;
    _resultData['updateUser'] = l$updateUser?.toJson();
    final l$$__typename = $__typename;
    _resultData['__typename'] = l$$__typename;
    return _resultData;
  }

  @override
  int get hashCode {
    final l$updateUser = updateUser;
    final l$$__typename = $__typename;
    return Object.hashAll([
      l$updateUser,
      l$$__typename,
    ]);
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) {
      return true;
    }
    if (!(other is MutationUpdateUser) || runtimeType != other.runtimeType) {
      return false;
    }
    final l$updateUser = updateUser;
    final lOther$updateUser = other.updateUser;
    if (l$updateUser != lOther$updateUser) {
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

extension UtilityExtension$MutationUpdateUser on MutationUpdateUser {
  CopyWith$MutationUpdateUser<MutationUpdateUser> get copyWith =>
      CopyWith$MutationUpdateUser(
        this,
        (i) => i,
      );
}

abstract class CopyWith$MutationUpdateUser<TRes> {
  factory CopyWith$MutationUpdateUser(
    MutationUpdateUser instance,
    TRes Function(MutationUpdateUser) then,
  ) = _CopyWithImpl$MutationUpdateUser;

  factory CopyWith$MutationUpdateUser.stub(TRes res) =
      _CopyWithStubImpl$MutationUpdateUser;

  TRes call({
    FragmentUser? updateUser,
    String? $__typename,
  });
  CopyWith$FragmentUser<TRes> get updateUser;
}

class _CopyWithImpl$MutationUpdateUser<TRes>
    implements CopyWith$MutationUpdateUser<TRes> {
  _CopyWithImpl$MutationUpdateUser(
    this._instance,
    this._then,
  );

  final MutationUpdateUser _instance;

  final TRes Function(MutationUpdateUser) _then;

  static const _undefined = {};

  TRes call({
    Object? updateUser = _undefined,
    Object? $__typename = _undefined,
  }) =>
      _then(MutationUpdateUser(
        updateUser: updateUser == _undefined
            ? _instance.updateUser
            : (updateUser as FragmentUser?),
        $__typename: $__typename == _undefined || $__typename == null
            ? _instance.$__typename
            : ($__typename as String),
      ));
  CopyWith$FragmentUser<TRes> get updateUser {
    final local$updateUser = _instance.updateUser;
    return local$updateUser == null
        ? CopyWith$FragmentUser.stub(_then(_instance))
        : CopyWith$FragmentUser(local$updateUser, (e) => call(updateUser: e));
  }
}

class _CopyWithStubImpl$MutationUpdateUser<TRes>
    implements CopyWith$MutationUpdateUser<TRes> {
  _CopyWithStubImpl$MutationUpdateUser(this._res);

  TRes _res;

  call({
    FragmentUser? updateUser,
    String? $__typename,
  }) =>
      _res;
  CopyWith$FragmentUser<TRes> get updateUser =>
      CopyWith$FragmentUser.stub(_res);
}

const documentNodeMutationUpdateUser = DocumentNode(definitions: [
  OperationDefinitionNode(
    type: OperationType.mutation,
    name: NameNode(value: 'UpdateUser'),
    variableDefinitions: [
      VariableDefinitionNode(
        variable: VariableNode(name: NameNode(value: 'id')),
        type: NamedTypeNode(
          name: NameNode(value: 'uuid'),
          isNonNull: false,
        ),
        defaultValue: DefaultValueNode(
            value: StringValueNode(
          value: '',
          isBlock: false,
        )),
        directives: [],
      ),
      VariableDefinitionNode(
        variable: VariableNode(name: NameNode(value: 'input')),
        type: NamedTypeNode(
          name: NameNode(value: 'usersSetInput'),
          isNonNull: false,
        ),
        defaultValue: DefaultValueNode(value: ObjectValueNode(fields: [])),
        directives: [],
      ),
    ],
    directives: [],
    selectionSet: SelectionSetNode(selections: [
      FieldNode(
        name: NameNode(value: 'updateUser'),
        alias: null,
        arguments: [
          ArgumentNode(
            name: NameNode(value: 'pk_columns'),
            value: ObjectValueNode(fields: [
              ObjectFieldNode(
                name: NameNode(value: 'id'),
                value: VariableNode(name: NameNode(value: 'id')),
              )
            ]),
          ),
          ArgumentNode(
            name: NameNode(value: '_set'),
            value: VariableNode(name: NameNode(value: 'input')),
          ),
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
MutationUpdateUser _parserFn$MutationUpdateUser(Map<String, dynamic> data) =>
    MutationUpdateUser.fromJson(data);
typedef OnMutationCompleted$MutationUpdateUser = FutureOr<void> Function(
  dynamic,
  MutationUpdateUser?,
);

class Options$MutationUpdateUser
    extends graphql.MutationOptions<MutationUpdateUser> {
  Options$MutationUpdateUser({
    String? operationName,
    Variables$MutationUpdateUser? variables,
    graphql.FetchPolicy? fetchPolicy,
    graphql.ErrorPolicy? errorPolicy,
    graphql.CacheRereadPolicy? cacheRereadPolicy,
    Object? optimisticResult,
    graphql.Context? context,
    OnMutationCompleted$MutationUpdateUser? onCompleted,
    graphql.OnMutationUpdate<MutationUpdateUser>? update,
    graphql.OnError? onError,
  })  : onCompletedWithParsed = onCompleted,
        super(
          variables: variables?.toJson() ?? {},
          operationName: operationName,
          fetchPolicy: fetchPolicy,
          errorPolicy: errorPolicy,
          cacheRereadPolicy: cacheRereadPolicy,
          optimisticResult: optimisticResult,
          context: context,
          onCompleted: onCompleted == null
              ? null
              : (data) => onCompleted(
                    data,
                    data == null ? null : _parserFn$MutationUpdateUser(data),
                  ),
          update: update,
          onError: onError,
          document: documentNodeMutationUpdateUser,
          parserFn: _parserFn$MutationUpdateUser,
        );

  final OnMutationCompleted$MutationUpdateUser? onCompletedWithParsed;

  @override
  List<Object?> get properties => [
        ...super.onCompleted == null
            ? super.properties
            : super.properties.where((property) => property != onCompleted),
        onCompletedWithParsed,
      ];
}

class WatchOptions$MutationUpdateUser
    extends graphql.WatchQueryOptions<MutationUpdateUser> {
  WatchOptions$MutationUpdateUser({
    String? operationName,
    Variables$MutationUpdateUser? variables,
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
          document: documentNodeMutationUpdateUser,
          pollInterval: pollInterval,
          eagerlyFetchResults: eagerlyFetchResults,
          carryForwardDataOnException: carryForwardDataOnException,
          fetchResults: fetchResults,
          parserFn: _parserFn$MutationUpdateUser,
        );
}

extension ClientExtension$MutationUpdateUser on graphql.GraphQLClient {
  Future<graphql.QueryResult<MutationUpdateUser>> mutateUpdateUser(
          [Options$MutationUpdateUser? options]) async =>
      await this.mutate(options ?? Options$MutationUpdateUser());
  graphql.ObservableQuery<MutationUpdateUser> watchMutationUpdateUser(
          [WatchOptions$MutationUpdateUser? options]) =>
      this.watchMutation(options ?? WatchOptions$MutationUpdateUser());
}

class MutationUpdateUser$HookResult {
  MutationUpdateUser$HookResult(
    this.runMutation,
    this.result,
  );

  final RunMutation$MutationUpdateUser runMutation;

  final graphql.QueryResult<MutationUpdateUser> result;
}

MutationUpdateUser$HookResult useMutationUpdateUser(
    [WidgetOptions$MutationUpdateUser? options]) {
  final result = graphql_flutter
      .useMutation(options ?? WidgetOptions$MutationUpdateUser());
  return MutationUpdateUser$HookResult(
    ({variables, optimisticResult}) => result.runMutation(
      variables?.toJson() ?? const {},
      optimisticResult: optimisticResult,
    ),
    result.result,
  );
}

graphql.ObservableQuery<MutationUpdateUser> useWatchMutationUpdateUser(
        [WatchOptions$MutationUpdateUser? options]) =>
    graphql_flutter
        .useWatchMutation(options ?? WatchOptions$MutationUpdateUser());

class WidgetOptions$MutationUpdateUser
    extends graphql.MutationOptions<MutationUpdateUser> {
  WidgetOptions$MutationUpdateUser({
    String? operationName,
    graphql.FetchPolicy? fetchPolicy,
    graphql.ErrorPolicy? errorPolicy,
    graphql.CacheRereadPolicy? cacheRereadPolicy,
    Object? optimisticResult,
    graphql.Context? context,
    OnMutationCompleted$MutationUpdateUser? onCompleted,
    graphql.OnMutationUpdate<MutationUpdateUser>? update,
    graphql.OnError? onError,
  })  : onCompletedWithParsed = onCompleted,
        super(
          operationName: operationName,
          fetchPolicy: fetchPolicy,
          errorPolicy: errorPolicy,
          cacheRereadPolicy: cacheRereadPolicy,
          optimisticResult: optimisticResult,
          context: context,
          onCompleted: onCompleted == null
              ? null
              : (data) => onCompleted(
                    data,
                    data == null ? null : _parserFn$MutationUpdateUser(data),
                  ),
          update: update,
          onError: onError,
          document: documentNodeMutationUpdateUser,
          parserFn: _parserFn$MutationUpdateUser,
        );

  final OnMutationCompleted$MutationUpdateUser? onCompletedWithParsed;

  @override
  List<Object?> get properties => [
        ...super.onCompleted == null
            ? super.properties
            : super.properties.where((property) => property != onCompleted),
        onCompletedWithParsed,
      ];
}

typedef RunMutation$MutationUpdateUser
    = graphql.MultiSourceResult<MutationUpdateUser> Function({
  Variables$MutationUpdateUser? variables,
  Object? optimisticResult,
});
typedef Builder$MutationUpdateUser = widgets.Widget Function(
  RunMutation$MutationUpdateUser,
  graphql.QueryResult<MutationUpdateUser>?,
);

class MutationUpdateUser$Widget
    extends graphql_flutter.Mutation<MutationUpdateUser> {
  MutationUpdateUser$Widget({
    widgets.Key? key,
    WidgetOptions$MutationUpdateUser? options,
    required Builder$MutationUpdateUser builder,
  }) : super(
          key: key,
          options: options ?? WidgetOptions$MutationUpdateUser(),
          builder: (
            run,
            result,
          ) =>
              builder(
            ({
              variables,
              optimisticResult,
            }) =>
                run(
              variables?.toJson() ?? const {},
              optimisticResult: optimisticResult,
            ),
            result,
          ),
        );
}
