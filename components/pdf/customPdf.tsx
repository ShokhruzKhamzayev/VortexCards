'use client'

import { InnerDetailTypo } from '@/types';
import { Document, Link, Page, PDFViewer, StyleSheet, Text, View, Image, Svg, Path } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftSide: {
    width: '45%',
    backgroundColor: '#222933',
    color: 'white',
    paddingTop: '30px'
  },
  rightSide: {
    width: '50%',
    backgroundColor: '#fefefe',
    paddingTop: '30px'
  },
  image: {
    borderRadius: '9999px',
    width: '50%',
    margin: '0px auto',
  }
});

export default function CustomPdf({state, data, link}: {
  state: boolean,
  data: InnerDetailTypo,
  link: string
}) {

  return (
      <PDFViewer className={`w-[90vw] h-[90dvh] top-[50%] left-[50%] fixed translate-x-[-50%] translate-y-[-50%] z-[99999999] transition-all duration-300 ${state ? "block opacity-100" : "hidden opacity-0"}`}>
          <Document>
              <Page  size={{width: 595, height: 300}} style={styles.page}>
                <View style={styles.leftSide}>
                    <View>
                      <Image src={data.avatar.url} style={styles.image} />
                      <Text style={{textAlign: 'center', marginTop: '30px'}}>{data.fullName}</Text>
                      <Text style={{textAlign: 'center', marginTop: '10px', fontSize: '14px', color: 'white'}}>{data.organization.name}</Text>
                    </View>
                </View>
                <View style={styles.rightSide}>
                    <View>
                      <View style={{flexDirection: 'row', gap: 10, textDecoration: 'underline'}}>
                        <Svg fill='#000000' style={{width: 20, height: 20}} viewBox="0 0 512 512"><Path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></Svg>
                        <Link style={{textDecoration: 'none', color: 'black'}} href={`tel:${data.telephoneNumber}`}>
                          {data.telephoneNumber}
                        </Link>
                      </View>
                      <View style={{flexDirection: 'row', gap: 10, marginTop: 20, textDecoration: 'underline'}}>
                        <Svg fill='#000' width={20} height={20} viewBox="0 0 512 512"><Path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></Svg>
                        <Link style={{textDecoration: 'none', color: 'black'}} href={`mailto:${data.email.slice(7)}`}>
                          {data.email.slice(7)}
                        </Link>
                      </View>
                      <View style={{flexDirection: 'row', gap: 10, marginTop: 20, textDecoration: 'underline'}}>
                      <Svg fill='#000' width={20} height={20} viewBox="0 0 512 512"><Path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"/></Svg>
                      <Link style={{textDecoration: 'none', color: 'black'}} href={`https://cards.vortexhub.uz${link}`}>Tashrif qog'ozga qaytish</Link>
                      </View>
                    </View>
                </View>
              </Page>
          </Document>
      </PDFViewer>
  )
}
