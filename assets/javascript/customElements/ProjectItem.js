export default class ProjectItem extends HTMLElement {

    static get observedAttributes() { return ['text']}

    constructor()
    {
        super();

        if (this.hasAttribute('data-img')) {
            let img = document.createElement('img')
            img.setAttribute('src', this.getAttribute('data-img'))

            this.appendChild(img)
        }

        if (this.hasAttribute('text') && this.hasAttribute('data-color-background')) {
            let div_text = document.createElement('div')
            div_text.classList.add('text-center')
            div_text.style.backgroundColor = this.getAttribute('data-color-background')

            this.p = document.createElement('p')
            this.p.innerText = this.getAttribute('text')
            div_text.appendChild(this.p)
            this.appendChild(div_text)
        }
    }

    connectedCallback()
    {
        this.addEventListener('mouseover', () =>
        {
            this.querySelector('img').classList.add('hover')
            this.querySelector('img')
            this.querySelector('div.text-center').style.backgroundColor = "rgba(255,255,255,0)"
            this.querySelector('div.text-center p').style.color = "rgba(255,255,255,0)"
        })

        this.addEventListener('mouseleave', () =>
        {
            this.querySelector('img').classList.remove('hover')
            this.querySelector('div.text-center').style.backgroundColor = this.getAttribute('data-color-background')
            this.querySelector('div.text-center p').style.color = "rgba(255,255,255,1)"
        })
    }

    disconnectedCallback()
    {
    }

    attributeChangeCallback (name, oldValue, newValue) {
        console.log(arguments)
        console.log('ah')
        if(name === 'text' && oldValue !== newValue){
            this.p.innerText = newValue
        }
    }

}
