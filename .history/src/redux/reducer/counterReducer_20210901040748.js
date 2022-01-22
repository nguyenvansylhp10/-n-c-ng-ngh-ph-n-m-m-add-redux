import {  useSelector } from 'react-redux'

// const Init = {
//     ProductHot
// }
const ProductHot = [
    {
        id:1,
        image: require('assets/images/product-21.jpg'),
        price: 595000,
        sale: 0,
        title: 'Giày 1  Giày Bít Mũi Nhọn Satin Phối Nơ - BMN 0418 - Màu Hồng ',
        status: {
          type: 'new',
          content: 'NEW',
        }
      },
      {
        id:2,

        image: require('assets/images/product-22.jpg'),
        price: 676000,
        sale: 845000,
        title: 'Túi 2 Giày Bít Mũi Nhọn Satin Phối Nơ - BMN 0418 - Màu Hồng',
        status: {
          type: 'sale',
          content: '-20%',
        }
      },
      {
        id:3,

        image: require('assets/images/product-23.jpg'),
        price: 575000,
        sale: 0,
        title: 'Túi Tote Thanh Lịch Da Nubuck Nhân Tạo - TOT 0056 - Màu Nâu',
        status: {
          type: '',
          content: ''
        }
      },
      {
        id:4,

        image: require('assets/images/product-24.jpg'),
        price: 1199200,
        sale: 1499000,
        title: 'Ví Cầm Tay Da Thật Phối Khóa Bản To - CLU 0062 - Màu Be',
        status: {
          type: 'sale',
          content: '-20%',
        }
      },
      {
        id:5,

        image: require('assets/images/product-25.jpg'),
        price: 645000,
        sale: 0,
        title: 'Giày Sandal Cao Gót - SDN 0655 - Màu Đỏ',
        status: {
          type: '',
          content: ''
        }
      },
      {
        id:6,

        image: require('assets/images/product-26.jpg'),
        price: 995000,
        sale: 775000,
        title: 'Balo Chần Bông Tạo Hình Đường Chéo - BAC 0121 - Màu Đỏ Đậm',
        status: {
          type: '',
          content: '',
        }
      },
      {
        id:7,
        
        image: require('assets/images/product-27.jpg'),
        price: 645000,
        sale: 0,
        title: 'Giày Sandal Gót Cói Nhiều Màu - Another Day - SDN 0668 - Màu Đen',
        status: {
          type: 'new',
          content: 'NEW',
        }
      },
      {
        id:8,

        image: require('assets/images/product-28.jpg'),
        price: 676000,
        sale: 845000,
        title: 'Túi Xách Tay Phối Vải Tweed - SAT 0238 - Màu Xanh Navy',
        status: {
          type: 'sale',
          content: '-20%',
        }
      },
]
const InitState = {
    counter: 1,
    ndn: ProductHot,
    giohang: 0,
    Carts:[],
    _products:[],
    sptronggio: "khong co sp nao",
}
export const counterReducer = (state = InitState , action )=>{
    switch(action.type){
        case 'INCREMENT_COUNT':
            return {
                ...state,
                counter: state.counter + 1
            };
        case 'INCREMENT_SUB':
            return{
                ...state,
                counter:state.counter -1
            }
        case 'xoa':
            
            const hoa = state.ndn.filter((item )=>{

                return item.id != action.id;
            })
       
            state.ndn = hoa;
            // const tan = {...state};
          return state
            
          
             case 'them':
            console.log(action.price)
            console.log(action.image)
            console.log(action.id)


              if(state.giohang==0){
                let cart = {
                    id:action.id,
                    name:action.name,
                    image:action.image,
                    price:action.price
                } 
                state.Carts.push(cart); 
            }
            else{
                let check = false;
                state.Carts.map((item,key)=>{
                    if(item.id==action.id){
                        state.Carts[key].quantity++;
                        check=true;
                    }
                });
                if(!check){
                    let _cart = {
                        id:action.id,
                        quantity:1,
                        name:action.name,
                        image:action.image,
                        price:action.price
                    }
                    state.Carts.push(_cart);
                }
            }
            return{
                ...state,
                giohang:state.giohang+1
            }

             return{  
              //  them({
                
              //  })
                  ...state,
                giohang: state.giohang + 1

              }

              
        default:
            return state;
    }
}




  
