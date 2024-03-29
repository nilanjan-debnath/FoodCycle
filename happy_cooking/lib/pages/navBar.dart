import 'package:flutter/material.dart';
import 'package:happy_cooking/pages/home.dart';
import 'package:happy_cooking/pages/remainder.dart';
import 'package:happy_cooking/pages/donate.dart';
import 'package:happy_cooking/pages/profile.dart';

class navBar extends StatefulWidget {
  const navBar({super.key});

  @override
  State<navBar> createState() => _navBarState();
}

class _navBarState extends State<navBar> {
  int _currentIndex = 0;
  List<Widget> pages = [
    const Home(),
    const Remainder(),
    const DonatePage(),
    const Profile(),
  ];
  void onTabTapped(int index) {
    setState(() {
      _currentIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      bottomNavigationBar: BottomNavigationBar(
        onTap: onTabTapped,
        currentIndex: _currentIndex,
        showSelectedLabels: false,
        showUnselectedLabels: false,
        type: BottomNavigationBarType.fixed,
        items: const [
          BottomNavigationBarItem(
            icon: Icon(
              Icons.home_rounded,
              color: Color(0xFF9299A1),
              size: 24,
            ),
            label: 'Home',
            backgroundColor: Colors.transparent,
          ),
          BottomNavigationBarItem(
            icon: Icon(
              Icons.fact_check,
              color: Color(0xFF9299A1),
              size: 24,
            ),
            label: 'Remainder',
            backgroundColor: Colors.transparent,
          ),
          BottomNavigationBarItem(
            icon: Icon(
              Icons.volunteer_activism,
              color: Color(0xFF9299A1),
              size: 24,
            ),
            label: 'Donate',
            backgroundColor: Colors.transparent,
          ),
          BottomNavigationBarItem(
            icon: Icon(
              Icons.account_circle,
              color: Color(0xFF9299A1),
              size: 24,
            ),
            label: 'Profile',
            backgroundColor: Colors.transparent,
          ),
        ],
      ),
      body: pages[_currentIndex],
    );
  }
}
