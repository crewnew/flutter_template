import 'package:core/core.dart';
import 'package:flutter/material.dart';

import '../../../providers.dart';

class HomePage extends HookConsumerWidget {
  const HomePage({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    // You can use flutter_hooks generated query
    // ignore: unused_local_variable
    final users = useQueryUsers();

    // You can use GraphQL Client
    final client = ref.watch(graphqlClientPOD);
    client.queryUsers(Options$QueryUsers(variables: Variables$QueryUsers()));

    return Scaffold(
      body: LayoutBuilder(
        builder: (context, constraints) {
          return SingleChildScrollView(
            child: ConstrainedBox(
              constraints: BoxConstraints(
                minHeight: constraints.maxHeight,
                maxWidth: constraints.maxWidth,
              ),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Text('TODO: Implement Presentation'),
                  //You can use Widgets
                  QueryUsers$Widget(
                    options: Options$QueryUsers(
                      variables: Variables$QueryUsers(
                        where: InputusersBoolExp(),
                      ),
                    ),
                    builder: (result, {fetchMore, refetch}) {
                      final user = result.parsedData?.users;
                      return Text('Users: ${user?.length}');
                    },
                  ),
                ],
              ),
            ),
          );
        },
      ),
    );
  }
}
