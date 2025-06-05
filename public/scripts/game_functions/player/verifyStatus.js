export default function verifyStatus(){
  if(localStorage.getItem('status')){
    return 'death';
  }
  return 'alive';
}