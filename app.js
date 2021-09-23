const app = Vue.createApp({
    data() {
        return {
            listInput: '',
            listInputTwo: '',
            listOne: [] ,
            listTwo: []
        };
    },
    computed: {
        
    },
    methods: {
        compareList(e){
            e.preventDefault();
            const list = this.listInput.split(/[ .:;?!~,`"&|()<>{}\[\]\r\n/\\]+/);
            const listTwo = this.listInputTwo.split(/[ .:;?!~,`"&|()<>{}\[\]\r\n/\\]+/);
            // console.log(list);
            // console.log(listTwo);
            this.compareArray(list, listTwo);
        },
        compareArray(a, b) {
            for (let i = 0; i < a.length; i++) {
                const element = a[i];
                b.filter(item => {
                    if(item === element) {
                        console.log(item, element);
                    }
                })
            }
        }
    }
});

app.mount('#table');