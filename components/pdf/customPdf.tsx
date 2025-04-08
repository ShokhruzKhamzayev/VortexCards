'use client'

import { Page, Text, View, Document, StyleSheet, PDFViewer, Link, pdf } from '@react-pdf/renderer';
import { ParamValue } from 'next/dist/server/request/params';
import { useEffect } from 'react';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

export default function CustomPdf({slug}: {
  slug: ParamValue 
}) {
  return (
    <PDFViewer className='w-full h-screen'>
        <Document>
            <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>{slug}</Text>
                <Link href='https://cards.vortexhub.uz'>Bosh sahifa</Link>
            </View>
            <View style={styles.section}>
                <Text>Section #2</Text>
            </View>
            </Page>
        </Document>
    </PDFViewer>
  )
}
