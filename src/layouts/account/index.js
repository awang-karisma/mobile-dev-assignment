import React from 'react';
import { WebView } from 'react-native-webview';

export default function Account() {
  return <WebView source={{ uri: 'https://google.com/' }} />;
}
