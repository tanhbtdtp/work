import {React,useState,useEffect} from "react";
import {Text, View, TouchableOpacity,ActivityIndicator} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as Print from 'expo-print';


export default ItemHoaDon = ({data})=>{
    const [selectedPrinter, setSelectedPrinter] = useState();   
    const [isLoading,setIsLoading] = useState(false)
   
// In ấn
const print = async () => {      
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    setIsLoading(true);    
    await Print.printAsync({
      html,
      printerUrl: selectedPrinter?.url, // iOS only
    });
    setIsLoading(false);    
};

const Loading = ()=>{
    return(
        <View style={{flexDirection:"row",alignItems:"center",opacity:0.8}}>
               <ActivityIndicator size={40}  color={'red'}/>
               <Text style={{ fontSize:15,marginLeft:5,fontWeight:400}}>Đang tải</Text>
        </View>
    )
}

// Template hoá đơn
const html = `
<!DOCTYPE html>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    <style>

        body {
            margin: 0;
            padding: 0;
            font-family: Arial, Helvetica, sans-serif;
        }
        @page {
            size: 2.8in 11in;
            margin-top: 0cm;
            margin-left: 0cm;
            margin-right: 0cm;
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        tr {
            width: 100%;
        }

        td {
            border-bottom: 0.5pt dotted black;
        }

        h1 {
            text-align: center;
            vertical-align: middle;
        }

        #logo {
            width: 60%;
            text-align: center;
            -webkit-align-content: center;
            align-content: center;
            padding: 5px;
            margin: 2px;
            display: block;
            margin: 0 auto;
        }

        header {
            width: 100%;
            text-align: center;
            -webkit-align-content: center;
            align-content: center;
            vertical-align: middle;
        }

        .items thead {
            text-align: center;
        }

        .center-align {
            text-align: center;
        }

        .bill-details td {
            font-size: 12px;
        }

        .receipt {
            font-size: medium;
        }

        .items .heading {
            font-size: 12.5px;
            text-transform: uppercase;
            border-top: 1px solid black;
            margin-bottom: 4px;
            border-bottom: 1px solid black;
            vertical-align: middle;
        }

        .items thead tr th:first-child,
        .items tbody tr td:first-child {
            width: 47%;
            min-width: 47%;
            max-width: 47%;
            word-break: break-all;
            text-align: left;
        }

        .items td {
            font-size: 12px;
            text-align: right;
            vertical-align: bottom;
        }

        .price::before {
            font-family: Arial;
            text-align: right;
        }

        .sum-up {
            text-align: right !important;
        }

        .total {
            font-size: 13px;
            border-top: 1px dashed black !important;
            border-bottom: 1px dashed black !important;
        }

            .total.text, .total.price {
                text-align: right;
            }

                .total.price::before {
                }

        .line {
            border-top: 1px solid black !important;
        }

        .heading.rate {
            width: 20%;
        }

        .heading.amount {
            width: 25%;
        }

        .heading.qty {
            width: 5%
        }

        p {
            padding: 1px;
            margin: 0;
        }

        section, footer {
            font-size: 12px;
        }      
    </style>
</head>
<body>
    <form id="form1">
        <header>
            <img class="media" src="https://vnptdongthap.vn/tainguyen/Images/VNPTLogo.png" style="height:90px;width:120px" />
        </header>        
        <header>
                    <p>
                        <b>TTKD VNPT - ĐỒNG THÁP</b><br>
                        <b>${data.donvi}</b>
                    </p>
                </header>
                <table class="bill-details">
                    <tbody>
                        <tr>
                            <th class="center-align" colspan="2"><span class="receipt"><b>GIẤY BÁO CƯỚC</b></span></th>
                        </tr>
                        <tr>
                            <th class="center-align" colspan="2"><span style="font-size:10pt">${data.ngay}</span></th>
                        </tr>
                    </tbody>
                </table>

                <table class="items">
                    <thead>
                        <tr>
                            <th colspan="4" style="border:dotted;border-width:0.5px;padding-top:5px;padding-bottom:5px">
                                Kính gửi Quý khách <br />
                                <span style="font-size:11pt">${data.ten_kh}</span> <br />
                                <span style="font-size:11pt;">${data.diachi_kh}</i></span><br />
                                <span style="font-size:11pt;">Mã KH/SĐT: </span><span style="font-size:11pt"><b> ${data.sodaidien} </b></span> <br />
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Nợ trước</td>
                            <td></td>
                            <td></td>
                            <td>${data.notruoc}</td>
                        </tr>
                        <tr>
                            <td>Phát sinh</td>
                            <td></td>
                            <td></td>
                            <td>${data.tien_ct}</td>
                        </tr>
                        <tr>
                            <th colspan="3" class="total text">Tổng tiền</th>
                            <th class="total price">${data.tien_ct}</th>
                        </tr>
                        <tr>
                            <td>Các khoản giảm trừ</td>
                            <td></td>
                            <td></td>
                            <td>${data.giamtru}</td>
                        </tr>
                        <tr>
                            <th colspan="3">Số tiền phải thu</th>
                            <th class="total price">${data.tien_cl}</th>
                        </tr>
                    </tbody>
                </table>

                <section>
                    <p>
                        Bằng chử :<i> <span>${data.bang_chu2}</i></span>
                    </p>
                    <br />
                </section>

                <table class="items">
                    <thead>
                        <tr>
                            <th colspan="2" style="border:dotted;border-width:0.5px;padding-top:5px;padding-bottom:5px">
                                <span style="font-size:10pt">Dịch vụ sử dụng</span>  <br />
                            </th>
                            <th colspan="2" style="border:dotted;border-width:0.5px;padding-top:5px;padding-bottom:5px">
                                <span style="font-size:10pt">Tài khoản</span>  <br />
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Cố định</td>
                            <td></td>
                            <td></td>
                            <td>${data.ten_tcd}</td>
                        </tr>
                        <tr>
                            <td>Gphone</td>
                            <td></td>
                            <td></td>
                            <td>${data.ten_tgp}</td>
                        </tr>
                        <tr>
                            <td>Di động</td>
                            <td></td>
                            <td></td>
                            <td>${data.ten_tvp}</td>
                        </tr>
                        <tr>
                            <td>Fiber</td>
                            <td></td>
                            <td></td>
                            <td>${data.ten_tfb}</td>
                        </tr>
                        <tr>
                            <td>MyTV</td>
                            <td></td>
                            <td></td>
                            <td>${data.ten_tmt}</td>
                        </tr>
                        <tr>
                            <td>CNTT</td>
                            <td></td>
                            <td></td>
                            <td>${data.ten_ttk}</td>
                        </tr>
                        <tr>
                            <td>Gói tích hợp</td>
                            <td></td>
                            <td></td>
                            <td>${data.ten_goi}</td>
                        </tr>

                    </tbody>
                </table>
                <br />
                <section>
                    <p style="text-align:center">
                        <span style="font-size:10pt">${data.ghi_chu}</span><br />
                        <span style="font-size:10pt">Số liên hệ quí khách hàng là : <b>${data.sdt_lh}</b></span><br />
                    </p>
                    <br />
                    <header>
                        <img src="https://vnptdongthap.vn/quantri/Qrcode?id=${data.qrcode_tt}" alt="QR Code" id="qrcodett" class="media" /><br />
                        QRcode thanh toán
                    </header>

                    <br />
                    <p style="text-align:center;font-size:10pt">
                        TỔNG ĐÀI CHĂM SÓC KHÁCH HÀNG
                    </p>
                </section>
                <footer style="text-align:center">
                    <p><span style="font-size:20pt;font-weight:bold">18001166</span></p>
                    <p> <i>Báo hỏng: Vui lòng nhấn phím 1, gặp điện thoại viên: Vui lòng nhấn phím 2 </i></p>
                </footer>
                <br />
                <p style="text-align:center">
                    NHÂN VIÊN THU CƯỚC<br />
                    <b>${data.ten_tc} <b> ${data.chitiet_lh}
                </p>
                <br/>                                                 
    </form>
</body>
</html>
`;

    return(
    <View>        
          <View
          style={{
            flex:1,
            backgroundColor: '#eeeeee',
            borderRadius: 10,
            padding: 10,
            marginVertical: 5,
            marginHorizontal: 5,
            opacity:0.8
          }}>
            
          <View style={{flexDirection:'row'}} >
             <View style={{flex:1,flexDirection:'row'}} >
                <Text style={{fontSize: 13,color:'#566573'}}>Mã TT</Text>
                <Text style={{fontSize: 15,marginLeft:5,fontWeight:700,color:'#2196F3'}}>{data.matt}</Text>          
             </View>
             <View>             
                  <Text style={{fontSize: 17,color:'#F86F03',marginLeft:50,fontWeight:700,opacity:1}}>{data.tien_cl} đ</Text>          
                  
             </View>
          </View>

          <Text style={{fontSize: 15,fontWeight:600}}>{data.ten_kh}</Text>
          <Text style={{fontSize: 12}}>{data.diachi_kh}</Text>          

          <View style={{flexDirection:'row',alignItems:"center"}} >
             <Text style={{fontSize: 13,color:'#566573'}}>Số liên hệ</Text>
             <Text style={{fontSize: 15,marginLeft:10,fontWeight:600}}>{data.sdt_lh}</Text>          
          </View>

          <View style={{flexDirection:'row',alignItems:"center"}} >
             <Text style={{fontSize: 13,color:'#566573'}}>Tình trạng</Text>
             <Text style={{fontSize: 13,marginLeft:10,fontWeight:600}}>             
                  {data.tinh_trang? <Text style={{color:'#239B56'}}>Đã thanh toán</Text> :<Text style={{color:'#CD5C5C'}}>Chưa thanh toán</Text>}
                  </Text>          
          </View>
          <View style={{flexDirection:'row',alignItems:"center",justifyContent:'space-between'}} >
            <View style={{alignItems:'center'}} >
                    {isLoading? <Loading/> :null}
            </View>
            <View style={{flexDirection:"row",alignItems:'center'}} >
                    <TouchableOpacity>
                        <Ionicons name="eye" size={40} style={{marginTop:5,opacity:0.3}} />             
                    </TouchableOpacity>
                    <TouchableOpacity onPress={print}>
                        <Ionicons name="print" size={40}  color={'#239B56'} style={{marginLeft:15,marginTop:5,opacity:0.8}} />
                    </TouchableOpacity>
            </View>
          </View>
        </View>    
    </View>
    )
};
