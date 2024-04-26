import React from 'react';
import { PDFViewer, Document, Page, View, Text, StyleSheet, Image } from '@react-pdf/renderer';
import QRCode from 'qrcode.react';

// Estilos
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    marginBottom: 10,
  },
  qrCode: {
    margin: 'auto',
    marginTop: 20,
  },
});

const BoletoPDF = () => {
  // Informações do Boleto
  const boletoData = {
    valor: 'R$ 100,00',
    vencimento: '30/04/2024',
    beneficiario: 'Nome do Beneficiário',
    cpfCnpj: '123.456.789-00',
    agencia: '1234',
    conta: '12345-6',
    codigoBarras: '34191.75008 01234.567895 01234.567896 5 12345678901234',
    pixKey: 'chavepix@banco.com',
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Boleto Bancário</Text>
          <Text style={styles.text}>Valor: {boletoData.valor}</Text>
          <Text style={styles.text}>Vencimento: {boletoData.vencimento}</Text>
          <Text style={styles.text}>Beneficiário: {boletoData.beneficiario}</Text>
          <Text style={styles.text}>CPF/CNPJ: {boletoData.cpfCnpj}</Text>
          <Text style={styles.text}>Agência: {boletoData.agencia}</Text>
          <Text style={styles.text}>Conta: {boletoData.conta}</Text>
        </View>

        {/* QR Code para PIX */}
        <View style={styles.qrCode}>
          <Text style={styles.subtitle}>PIX</Text>
          <QRCode value={boletoData.pixKey} size={128} />
          <Text style={styles.text}>Chave PIX: {boletoData.pixKey}</Text>
        </View>

        {/* Código de Barras */}
        <View style={styles.section}>
          <Text style={styles.subtitle}>Código de Barras</Text>
          <Image src={`data:image/svg+xml;utf8,<svg>${boletoData.codigoBarras}</svg>`} />
          <Text style={styles.text}>{boletoData.codigoBarras}</Text>
        </View>
      </Page>
    </Document>
  );
};

const App = () => (
  <PDFViewer width="100%" height="800px">
    <BoletoPDF />
  </PDFViewer>
);

export default App;
