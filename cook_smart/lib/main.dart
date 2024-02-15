import 'package:flutter/material.dart';

import 'package:cook_smart/pages/login.dart';
import 'package:cook_smart/pages/home.dart';
import 'package:cook_smart/pages/profile.dart';
import 'package:cook_smart/pages/remainder.dart';
import 'package:cook_smart/pages/shopping.dart';
import 'package:cook_smart/pages/donate.dart';


void main() {
  runApp(MaterialApp(
    debugShowCheckedModeBanner: false,
    initialRoute: '/profile',
    routes: {
      '/': (context) => Login(),
      '/home': (context) => Home(),
      '/profile': (context) => Profile(),
      '/remainder': (context) => Remainder(),
      '/Shopping': (context) => Shopping(),
      '/donate': (context) => Donate(),
    },
  ));
}