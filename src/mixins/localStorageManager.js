const localStorageManager = {
    data:function(){
      return {
  
      }
    },
    methods:{
      saveIntoLocalStorage(key, item) {
        localStorage.setItem(key, JSON.stringify(item));
      },
      getIntoLocalStorage(item) {
        if (localStorage.getItem(item))
          return JSON.parse(localStorage.getItem(item));
      },
      persistInLocalStorage(itemKey, item) {
        let key = itemKey;
        if (!localStorage.getItem(key))
          this.saveIntoLocalStorage(key, item);
        else {
          this.tasks = this.getIntoLocalStorage(key);
        }
      }
    }
  }

  export default localStorageManager;