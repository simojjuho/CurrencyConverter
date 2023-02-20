Creator: Juho Simojoki

This project is my own little test project for practice. The app gets currency data from backend (https://github.com/simojjuho/CurrencyConverterBackend) that sends them to the frontend. I'm using backend because I tried to get mthe frontend more stable. I could have also continued using just external API as tcoding backend didn't seem to bring the help needed, but I take the backend part as a good excercise.

At the moment the app is very simple:

It only has exchange table that uses US Dollar as a base currency that is converted into three other currencies (Pound, Euro and South African Rand). You also can use invert button to get the inverted conversion rate if you so wish. Later there will be an actual conversion form and you will be also able to change the base currency and the other currencies in the table.

Used modules:
- axios
- dotenv

