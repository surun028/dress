const moudleA={
  state:{
    cartArr:JSON.parse(localStorage.getItem('cartArr') || '[]')
    // cartArr:[]
 },
  mutations:{
     add(state,cartobj){  //向cartArr中添加数据
    //   console.log(cartobj,"cart")
       state.cartArr.push(cartobj);
     },
     putN(state,[index,obj]){//数量
       console.log(obj)
        state.cartArr[index].num +=obj.num;
     },
     addN(state,index){ //+
        state.cartArr[index].num +=1;

     },
     reduN(state,index){//-
      state.cartArr[index].num -= 1;

     },
     del(state,index){
       state.cartArr.splice(index,1);

     },
     isCheck(state,index){
        state.cartArr[index].ischeck=!state.cartArr[index].ischeck;
     },
     changeAll(state,check){
       state.cartArr.forEach(item=>{
          item.ischeck=check
        })
     }
  },
  actions:{
      addCart(context,pload){
         const index=context.state.cartArr.findIndex(item=>{
            return item.pid==pload.pid && item.uid==pload.uid
         })
       //   console.log(index);
         console.log(pload)
        if(index<0){
           context.commit('add',pload);
        }else{
           context.commit('putN',[index,pload]);
        }
      },
      reduN(context,index){//-
         if(context.state.cartArr[index].num>1){
            context.commit('reduN',index)
         }
      }
  }
}


export default moudleA;