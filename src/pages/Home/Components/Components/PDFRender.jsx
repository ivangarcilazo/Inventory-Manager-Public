/* eslint-disable react/prop-types */
import { useState } from 'react';
import Modal from '../../../../Components/Modal/Modal';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 12,
  },
  table: {
    display: 'flex',
    flexDirection:'column',
    width: '100%',
  },
  tableRow: {
    flexDirection: 'row',
    display:'flex',
    justifyContent:'space-between',
    width: '100%'
  },
  tableCell: {
    margin: 'auto',
    marginTop: 20,
    fontSize: 10,
  },
  tableCellDescription:{
    width:'70px',
    margin:'auto',
    marginTop: 20,
    fontSize: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    height:'50px',
    display:'grid',
    placeItems:'center',
    borderBottom:'1px solid orange'
  },
  itemsHeader:{
    display:'flex',
    justifyContent:'center',
    width:'100%'
  }
});

export default function PDFRender({ data }) {
  const [isOpened, setIsOpened] = useState(false);

  const handlerSave = () =>{
    console.log(pdf)
  }

  const pdf = (
    <Document >
      <Page size="A4" style={styles.page}>
      <View style={styles.table}>
          <View style={styles.tableHeader}>
              <Text style={styles.tableCell}>Name</Text>
              <Text style={styles.tableCell}>Stock</Text>
              <Text style={styles.tableCell}>Price</Text>
              <Text style={styles.tableCell}>Description</Text>
          </View>
          <View style={styles.itemsHeader}>
              {data.map((product, index) => (
              <View style={styles.tableRow} key={index}>
                  <Text style={styles.tableCell}>{product.productName}</Text>
                  <Text style={styles.tableCell}>{product.productQuantity}</Text>
                  <Text style={styles.tableCell}>${product.productPrice}</Text>
                  <Text style={styles.tableCellDescription}>{product.productDescription}</Text>
              </View>
              ))}
          </View>
      </View>
      </Page>
  </Document>
  )

  return (
    <>
      <button
        className="z- text-slate-600 bg-orange-600 rounded p-1 text-white"
        onClick={() => setIsOpened(true)}
      >
        Download as PDF
      </button>
      <Modal isOpened={isOpened} setIsOpened={setIsOpened}>
        <div className="text-slate-600">
        <PDFViewer style={{width:'90vw', height:'60vh'}}>
          {pdf}
        </PDFViewer>
        </div>
        <button onClick={handlerSave} className='text-black'>asda</button>
      </Modal>
    </>
  );
}
