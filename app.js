const app = Vue.createApp({
    data() {
        return {
            listInput: '',
            listInputTwo: '',
            listOne: [] ,
            listTwo: []
        };
    },
    compute: {
        compareArray() {
            for (let i = 0; index < listOne.length; index++) {
                const element = listOne[i];
                listTwo.filter(item => {
                    if(item == element) {
                        console.log(item);
                    }
                })
            }
        }
    },
    methods: {
        addToList(e) {
            e.preventDefault();
            const list = this.listInput.split(/[ .:;?!~,`"&|()<>{}\[\]\r\n/\\]+/);
            console.log(list);
        },
        addToListTwo(e) {
            e.preventDefault();
            this.listTwo.push(this.listInputTwo);
            console.log(this.listTwo);
        },
        compare(){
            
        }
    }
});

app.mount('#table');