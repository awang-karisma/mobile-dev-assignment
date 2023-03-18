import { CardNumber, Cvv, ExpiryDate, Frames, SubmitButton } from 'frames-react-native';
import { StyleSheet, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

export default function PaymentAdd() {
  const theme = useTheme();
  const customTheme = StyleSheet.create({
    textbox: {
      ...theme.fonts.bodyLarge,
      backgroundColor: theme.colors.backdrop,
      // color: theme.colors.primary
    },
  });
  return (
    <View style={{ ...styles.container, backgroundColor: theme.colors.background }}>
      <Frames
        config={{
          debug: true,
          publicKey: 'pk_test_130cff29-63c5-4b6e-9f52-b5391ffe9a64',
        }}
        cardTokenized={(e) => {
          alert(e.token);
        }}
      >
        <Text style={styles.caption}>Card Number</Text>
        <CardNumber
          style={{
            ...styles.cardNumber,
            ...customTheme.textbox,
          }}
          placeholderTextColor="#9898A0"

          // showIcon={false} in case you don't want to see the card scheme logo
        />

        <View style={styles.dateAndCode}>
          <View style={{ width: '48%' }}>
            <Text style={styles.caption}>Expiry Date</Text>
            <ExpiryDate
              style={{
                ...styles.expiryDate,
                ...customTheme.textbox,
              }}
              placeholderTextColor="#9898A0"
            />
          </View>
          <View style={{ width: '48%' }}>
            <Text style={styles.caption}>CVV</Text>
            <Cvv
              style={{
                ...styles.cvv,
                ...customTheme.textbox,
              }}
              placeholderTextColor="#9898A0"
            />
          </View>
        </View>

        <SubmitButton
          title="Pay Now"
          style={{
            ...styles.button,
            borderRadius: theme.roundness * 6,
            backgroundColor: theme.colors.primary,
          }}
          textStyle={{
            ...styles.buttonText,
            ...theme.fonts.labelLarge,
            color: theme.colors.onPrimary,
          }}
          onPress={() => console.log('merchant action')}
        />
      </Frames>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 80,
    paddingLeft: 10,
    paddingRight: 10,
  },
  caption: {
    marginVertical: 8,
  },
  dateAndCode: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardNumber: {
    fontSize: 18,
    height: 50,
    color: '#FEFFFF',
    backgroundColor: '#1B1C1E',
    borderColor: '#3A4452',
    borderRadius: 5,
    borderWidth: 0,
  },
  expiryDate: {
    fontSize: 18,
    height: 50,
    width: '100%',
    color: '#FEFFFF',
    backgroundColor: '#1B1C1E',
    borderWidth: 0,
  },
  cvv: {
    fontSize: 18,
    height: 50,
    width: '100%',
    color: '#FEFFFF',
    backgroundColor: '#1B1C1E',
    borderWidth: 0,
  },
  button: {
    height: 48,
    marginTop: 20,
    justifyContent: 'center',
    backgroundColor: '#4285F4',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
