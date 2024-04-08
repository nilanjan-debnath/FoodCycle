import 'package:flutter/material.dart';
import 'package:buttons_tabbar/buttons_tabbar.dart';

class DonatePage extends StatefulWidget {
  const DonatePage({Key? key}) : super(key: key);

  @override
  State<DonatePage> createState() => _DonatePageState();
}

class _DonatePageState extends State<DonatePage> {
  final _donations = <DonationItem>[];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Donate Food & Money'),
      ),
      body: SafeArea(
        child: DefaultTabController(
          length: 2,
          child: Column(
            children: [
              ButtonsTabBar(
                backgroundColor: Colors.green,
                unselectedBackgroundColor: Colors.grey[300],
                unselectedLabelStyle: TextStyle(color: Colors.black),
                labelStyle:
                    TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
                tabs: [
                  Tab(
                    icon: Icon(Icons.food_bank_outlined),
                    text: "Food",
                  ),
                  Tab(
                    icon: Icon(Icons.payments_outlined),
                    text: "Money",
                  ),
                ],
              ),
              Expanded(
                child: TabBarView(
                  children: [
                    SingleChildScrollView(
                      padding: EdgeInsets.all(20.0),
                      child: Column(
                        children: [
                          // Food name and quantity section
                          _DonationItemInput(
                            onAddItem: (item) =>
                                setState(() => _donations.add(item)),
                          ),

                          // List of added items
                          ListView.builder(
                            shrinkWrap: true,
                            itemCount: _donations.length,
                            itemBuilder: (context, index) {
                              final item = _donations[index];
                              return _DonationItemCard(item: item);
                            },
                          ),

                          // Donate button
                          Padding(
                            padding: const EdgeInsets.all(20.0),
                            child: FilledButton(
                              onPressed: () {
                                print('Donations: $_donations');
                                setState(() {
                                  _donations
                                      .clear(); // Clear the list after donation
                                });
                              },
                              child: Text('Donate'),
                            ),
                          ),
                        ],
                      ),
                    ),
                    SingleChildScrollView(
                      padding: EdgeInsets.all(20.0),
                      child: Column(
                        children: [
                          Padding(
                            padding: const EdgeInsets.fromLTRB(50, 0, 50, 5),
                            child: TextField(
                              decoration: InputDecoration(
                                labelText: 'Ammount',
                              ),
                            ),
                          ),
                          Padding(
                            padding: const EdgeInsets.fromLTRB(30, 30, 30, 10),
                            child: Text(
                              "CARDS, UPI & MORE",
                              style: TextStyle(
                                fontSize: 18,
                              ),
                            ),
                          ),
                          Container(
                            height: 60,
                            decoration: BoxDecoration(
                                color: Colors.blueGrey[100],
                                borderRadius: BorderRadius.circular(10)),
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.start,
                              children: [
                                Padding(
                                  padding:
                                      const EdgeInsets.fromLTRB(20, 0, 20, 0),
                                  child: Icon(Icons.credit_card_outlined),
                                ),
                                Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Padding(
                                      padding:
                                          const EdgeInsets.fromLTRB(0, 5, 0, 0),
                                      child: Text(
                                        "Card",
                                        style: TextStyle(
                                          fontSize: 18,
                                          fontWeight: FontWeight.w600,
                                        ),
                                      ),
                                    ),
                                    Text("Visa, MasterCard, RuPay and Maestro")
                                  ],
                                ),
                              ],
                            ),
                          ),
                          SizedBox(
                            height: 5,
                          ),
                          Container(
                            height: 115,
                            decoration: BoxDecoration(
                                color: Colors.blueGrey[100],
                                borderRadius: BorderRadius.circular(10)),
                            child: Column(
                              children: [
                                Row(
                                  children: [
                                    Padding(
                                      padding: const EdgeInsets.fromLTRB(
                                          20, 0, 20, 0),
                                      child: Image(
                                        image: AssetImage(
                                            'assets/images/upi100.png'),
                                        width: 40,
                                        height: 40,
                                        alignment: Alignment.center,
                                      ),
                                    ),
                                    Column(
                                      crossAxisAlignment:
                                          CrossAxisAlignment.start,
                                      children: [
                                        Padding(
                                          padding: const EdgeInsets.fromLTRB(
                                              0, 5, 0, 0),
                                          child: Text(
                                            "UPI",
                                            style: TextStyle(
                                              fontSize: 18,
                                              fontWeight: FontWeight.w600,
                                            ),
                                          ),
                                        ),
                                        Text(
                                            "Pay with installed app, or use others")
                                      ],
                                    ),
                                  ],
                                ),
                                SizedBox(
                                  height: 5,
                                ),
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceEvenly,
                                  children: [
                                    Image(
                                      image:
                                          AssetImage('assets/images/gpay.png'),
                                      width: 50,
                                      height: 50,
                                      alignment: Alignment.center,
                                    ),
                                    Image(
                                      image: AssetImage(
                                          'assets/images/phonepe.png'),
                                      width: 50,
                                      height: 50,
                                      alignment: Alignment.center,
                                    ),
                                    Image(
                                      image:
                                          AssetImage('assets/images/paytm.png'),
                                      width: 50,
                                      height: 50,
                                      alignment: Alignment.center,
                                    ),
                                    Image(
                                      image:
                                          AssetImage('assets/images/more.png'),
                                      width: 50,
                                      height: 50,
                                      alignment: Alignment.center,
                                    ),
                                  ],
                                ),
                              ],
                            ),
                          ),
                          SizedBox(
                            height: 5,
                          ),
                          Container(
                            height: 60,
                            decoration: BoxDecoration(
                                color: Colors.blueGrey[100],
                                borderRadius: BorderRadius.circular(10)),
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.start,
                              children: [
                                Padding(
                                  padding:
                                      const EdgeInsets.fromLTRB(20, 0, 20, 0),
                                  child: Image(
                                    image:
                                        AssetImage('assets/images/banking.png'),
                                    width: 30,
                                    height: 30,
                                    alignment: Alignment.center,
                                  ),
                                ),
                                Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Padding(
                                      padding:
                                          const EdgeInsets.fromLTRB(0, 5, 0, 0),
                                      child: Text(
                                        "Netbanking",
                                        style: TextStyle(
                                          fontSize: 18,
                                          fontWeight: FontWeight.w600,
                                        ),
                                      ),
                                    ),
                                    Text("All Indian banks")
                                  ],
                                ),
                              ],
                            ),
                          ),
                          Padding(
                            padding: const EdgeInsets.all(20.0),
                            child: FilledButton(
                              onPressed: () {},
                              child: Text('Donate'),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _DonationItemInput extends StatefulWidget {
  final Function(DonationItem) onAddItem;

  const _DonationItemInput({Key? key, required this.onAddItem})
      : super(key: key);

  @override
  State<_DonationItemInput> createState() => __DonationItemInputState();
}

class __DonationItemInputState extends State<_DonationItemInput> {
  String _foodName = '';
  int _foodQuantity = 0;

  void _submitItem() {
    if (_foodName.isNotEmpty && _foodQuantity > 0) {
      final item = DonationItem(_foodName, _foodQuantity);
      widget.onAddItem(item);
      _foodName = '';
      _foodQuantity = 0;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      decoration: BoxDecoration(
        color: Theme.of(context).colorScheme.primaryContainer,
        boxShadow: const [
          BoxShadow(
            blurRadius: 4,
            color: Color(0x25090F13),
            offset: Offset(0, 2),
          )
        ],
        borderRadius: BorderRadius.circular(12),
      ),
      child: Row(
        children: [
          Expanded(
            child: Padding(
              padding: const EdgeInsets.fromLTRB(15, 2, 0, 2),
              child: TextField(
                decoration: InputDecoration(
                  labelText: 'Food Name',
                ),
                onChanged: (value) => setState(() => _foodName = value),
              ),
            ),
          ),
          SizedBox(width: 10.0),
          NumberPicker(
            value: _foodQuantity,
            minValue: 1,
            maxValue: 10,
            onChanged: (value) => setState(() => _foodQuantity = value),
          ),
          SizedBox(width: 10.0),
          Padding(
            padding: EdgeInsets.all(10.00),
            child: ElevatedButton(
              child: Text('Add'),
              onPressed: _submitItem,
            ),
          ),
        ],
      ),
    );
  }
}

class DonationItem {
  final String name;
  final int quantity;

  const DonationItem(this.name, this.quantity);
}

class _DonationItemCard extends StatelessWidget {
  final DonationItem item;

  const _DonationItemCard({Key? key, required this.item}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      child: ListTile(
        title: Text(item.name),
        subtitle: Text('Quantity: ${item.quantity}'),
      ),
    );
  }
}

class NumberPicker extends StatefulWidget {
  final int value;
  final int minValue;
  final int maxValue;
  final ValueChanged<int> onChanged;

  const NumberPicker({
    Key? key,
    required this.value,
    required this.minValue,
    required this.maxValue,
    required this.onChanged,
  }) : super(key: key);

  @override
  State<NumberPicker> createState() => _NumberPickerState();
}

class _NumberPickerState extends State<NumberPicker> {
  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        IconButton(
          icon: Icon(Icons.remove),
          onPressed: () => setState(() {
            if (widget.value > widget.minValue) {
              widget.onChanged(widget.value - 1);
            }
          }),
        ),
        Text(widget.value.toString()),
        IconButton(
          icon: Icon(Icons.add),
          onPressed: () => setState(() {
            if (widget.value < widget.maxValue) {
              widget.onChanged(widget.value + 1);
            }
          }),
        ),
      ],
    );
  }
}
