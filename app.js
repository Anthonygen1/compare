const app = Vue.createApp({
    data() {
        return {
            listInput: '',
            listInputTwo: '',
            sameSku: [],
            differentSku: [],
            doneComparing: false,
        };
    },
    computed: {
        
    },
    methods: {
        compareList(e){
            e.preventDefault();
            const list = this.listInput.split(/[ .:;?!~,`"&|()<>{}\[\]\r\n/\\]+/);
            const listTwo = this.listInputTwo.split(/[ .:;?!~,`"&|()<>{}\[\]\r\n/\\]+/);
            this.compareArray(list, listTwo);
            this.doneComparing = true;
        },
        compareArray(a, b) {
            for (let i = 0; i < a.length; i++) {
                const element = a[i];
                b.filter(item => {
                    if(item === element) {
                        this.sameSku.push(item);
                        console.log(item, element);
                    } else if (item != element) {
                        console.log (element, 'not the same')
                    }
                })
            }
        },
        reload(e) {
            e.preventDefault();
            this.sameSku = [];
            this.listInput = '';
            this.listInputTwo = '';
            this.doneComparing = false;
        }
    }
});

app.mount('#table');