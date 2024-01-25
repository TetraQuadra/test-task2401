import Button from 'components/Button/Button'
import Tabs from 'components/Tabs/Tabs'
import React from 'react'
import styles from './Section1.module.scss'

function Section1() {

    const tabsData = [
        { tabName: 'Tab1', title: 'Vestiblum vel dictum ipsum?', content: 'Morbi lobortis, massa ac dictum commodo, dolor ipsum dapibus massa, a fringilla ante augue eget felis. Aliquam ornare ante est, ac venenatis nunc fermentum vel. Integer vel nulla sit amet sem aliquet mollis. Nam a justo id magna semper luctus non in massa. Proin vehicula augue in felis lobortis vestibulum. Curabitur quis massa non velit tincidunt lobortis nec vitae dui.' },
        { tabName: 'Tab2', title: 'Vitae proin rhoncus mattis?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Quam vulputate dignissim suspendisse in est ante in. Cursus in hac habitasse platea dictumst quisque sagittis purus. Diam quam nulla porttitor massa id neque aliquam. Vitae aliquet nec ullamcorper sit amet risus. Sed arcu non odio euismod lacinia at quis risus sed.' },
        { tabName: 'Tab3', title: 'Eget mauris pharetra et ultrices?', content: 'Odio euismod lacinia at quis risus. Consequat semper viverra nam libero justo laoreet sit. Sit amet dictum sit amet justo. Enim lobortis scelerisque fermentum dui faucibus in ornare quam. Orci porta non pulvinar neque laoreet suspendisse. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra.' },
        { tabName: 'Tab4', title: 'At auctor urna nunc id?', content: 'Nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus. Turpis nunc eget lorem dolor. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Porta lorem mollis aliquam ut porttitor leo a diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Egestas integer eget aliquet nibh.' },

    ];

    return (
        <section className={styles.section}>
            <div className='container'>
                <h2 className={styles.title}>Aliquam ut libero vel urna rhoncus?</h2>
                <p className={styles.description}>Proin molestie justo at rhoncus ornare. Phasellus vulputate ultrices nibh sed lacinia. Etiam dui felis, ultricies vel accumsan iaculis, accumsan ac sapien. Suspendisse volutpat ipsum orci, vitae euismod augue dapibus quis. Integer felis nisi, semper vel vehicula nec, interdum ut felis. Donec sagittis lacinia nulla eget tincidunt.</p>
                <Tabs className={styles.tabs} tabsData={tabsData} />
                <Button className={styles.downloadButton}>Download</Button>
            </div>
        </section>
    )
}

export default Section1