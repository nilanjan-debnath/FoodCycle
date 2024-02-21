import 'package:flutter/material.dart';

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
      body: SingleChildScrollView(
        padding: EdgeInsets.all(20.0),
        child: Column(
          children: [
            // Food name and quantity section
            _DonationItemInput(
              onAddItem: (item) => setState(() => _donations.add(item)),
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
                    _donations.clear(); // Clear the list after donation
                  });
                },
                child: Text('Donate'),
              ),
            ),
          ],
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
