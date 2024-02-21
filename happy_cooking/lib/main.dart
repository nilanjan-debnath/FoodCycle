
import 'package:flutter/material.dart';

import 'package:happy_cooking/pages/login.dart';
import 'package:happy_cooking/pages/navBar.dart';
import 'package:happy_cooking/pages/home.dart';
import 'package:happy_cooking/pages/profile.dart';
import 'package:happy_cooking/pages/remainder.dart';
import 'package:happy_cooking/pages/shopping.dart';
import 'package:happy_cooking/pages/donate.dart';


void main() {
  runApp(MaterialApp(
    debugShowCheckedModeBanner: false,
    initialRoute: '/',
    routes: {
      '/': (context) => const navBar(),
      '/login': (context) => const Login(),
      '/home': (context) => const Home(),
      '/profile': (context) => const Profile(),
      '/remainder': (context) => const Remainder(),
      '/Shopping': (context) => const Shopping(),
      '/donate': (context) => const DonatePage(),
    },
  ));
}