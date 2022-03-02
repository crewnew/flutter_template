import 'package:core/core.dart';
import 'package:app/src/providers.dart';
import 'package:flutter/material.dart';

class SignInPage extends HookConsumerWidget {
  const SignInPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final nhost = ref.watch(nhostClientPOD);
    final emailController = useTextEditingController(text: kDebugEmail);
    final passwordController = useTextEditingController(text: kDebugPassword);
    final form = useState(GlobalKey<FormState>());
    return Scaffold(
        backgroundColor: Colors.white,
        body: LayoutBuilder(
          builder: (context, constraints) {
            return SingleChildScrollView(
              padding: const EdgeInsets.all(32),
              child: ConstrainedBox(
                constraints: BoxConstraints(
                  minHeight: constraints.maxHeight,
                  maxWidth: constraints.maxWidth,
                ),
                child: IntrinsicHeight(
                  child: Form(
                    key: form.value,
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        const Spacer(),
                        Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Padding(
                              padding: const EdgeInsets.only(top: 8),
                              child: Text(
                                'Hello,',
                                style: Theme.of(context)
                                    .textTheme
                                    .headlineMedium
                                    ?.apply(color: Colors.black, fontSizeDelta: -3),
                                textAlign: TextAlign.left,
                              ),
                            ),
                            Padding(
                              padding: const EdgeInsets.symmetric(vertical: 8),
                              child: Text(
                                'Enter your email address and password to get access to your account.',
                                style: Theme.of(context)
                                    .textTheme
                                    .bodyMedium
                                    ?.copyWith(color: Theme.of(context).textTheme.bodySmall?.color),
                                textAlign: TextAlign.left,
                              ),
                            ),
                          ],
                        ),
                        Column(
                          children: [
                            Column(
                              children: [
                                Padding(
                                  padding: const EdgeInsets.symmetric(vertical: 8),
                                  child: TextField(
                                    decoration: InputDecoration(
                                      hintText: 'Enter your email',
                                      hintStyle:
                                          Theme.of(context).textTheme.labelLarge?.copyWith(color: Colors.black45),
                                    ),
                                    controller: emailController,
                                  ),
                                ),
                                Padding(
                                  padding: const EdgeInsets.symmetric(vertical: 8),
                                  child: TextField(
                                    decoration: InputDecoration(
                                      hintText: 'Enter your password',
                                      hintStyle:
                                          Theme.of(context).textTheme.labelLarge?.copyWith(color: Colors.black45),
                                    ),
                                    controller: passwordController,
                                    obscureText: true,
                                  ),
                                ),
                              ],
                            ),
                            Padding(
                              padding: const EdgeInsets.symmetric(vertical: 8),
                              child: RawMaterialButton(
                                fillColor: Theme.of(context).primaryColor,
                                splashColor: Colors.transparent,
                                elevation: 0,
                                hoverElevation: 0,
                                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
                                child: Padding(
                                  padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 16),
                                  child: Row(
                                    crossAxisAlignment: CrossAxisAlignment.center,
                                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                                    children: [
                                      Text(
                                        'Login',
                                        style: Theme.of(context).primaryTextTheme.labelLarge,
                                        textAlign: TextAlign.left,
                                      ),
                                    ],
                                  ),
                                ),
                                onPressed: () async {
                                  if (form.value.currentState?.validate() ?? false) {
                                    try {
                                      await nhost.auth
                                          .signUp(email: emailController.text, password: passwordController.text);
                                    } on ApiException catch (e) {
                                      ScaffoldMessenger.of(context).showSnackBar(
                                        SnackBar(
                                          content: Text('${e.body}'),
                                        ),
                                      );
                                    }
                                  }
                                },
                              ),
                            ),
                          ],
                        ),
                        const Spacer(),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Text(
                              '© CrewNew Ltd ${DateTime.now().year}',
                              style: Theme.of(context).textTheme.bodySmall,
                            ),
                            Text(
                              'v0.0.1',
                              style: Theme.of(context).textTheme.bodySmall,
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            );
          },
        ));
  }
}
