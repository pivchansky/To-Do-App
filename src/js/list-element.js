class ListElement extends HTMLElement {

    constructor() {
      super();
      
      let templ = document.querySelector('#listTempl');
      let templContent =  templ.content.cloneNode(true);
      const shadowRoot = this.attachShadow({mode: "open"}).appendChild(templContent);
    }
  
    connectedCallback(){
        
        this.shadowRoot.querySelector('#lstBtn').addEventListener('click', function() {
            let papa = this.parentElement;
            papa.remove();
            
            // deleteFromStorage();
        });
        let list = document.querySelector('.list');
        list.addEventListener('click', function(event) {
            let target = event.target;
        
            try {
                if (target.matches('list-element')) {
                    target.shadowRoot.querySelector('.list__item').classList.toggle('list__item_checked');
                }
            } catch(err) {
                // just say ok
            }
            
        }, false)
    }
}

customElements.define("list-element", ListElement);