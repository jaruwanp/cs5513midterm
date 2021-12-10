import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllIds, getData } from '../../lib/data';
import Link from 'next/link';

export async function getStaticProps({ params }) {
  const itemData = await getData(params.id);
  // console.log(itemData);
  return {
    props: {
      itemData
    },
    revalidate: 60 // set this to seconds before ISR invoked
  };
}



export async function getStaticPaths() {
  const paths = await getAllIds();
  return {
    paths,
    fallback: false
  };
}

export default function Entry({ itemData }) {
  //itemData.post_date.substring(0, 10).replace('-','/').replace('-','/') + '/' 
  var wp_link = 'https://dev-jaruwanpatt.pantheonsite.io/'+ itemData.post_date.toString().substring(0, 10).replace('-','/').replace('-','/') + '/' + itemData.post_name;
  return (
    <Layout>
      <article className="card col-10">
        <div className="card-body">
          <h3 className="card-title">{itemData.post_title}</h3>
           <h4>Post date: {itemData.postdate}</h4>
           <h4>Author:{itemData.auther}</h4>
          <h4>
           View content on Wordpress: {' '}
           <Link href={wp_link}>
            <a target='_blank'>{wp_link}</a>
          </Link>
          </h4>
          <br/>
          <div className="card-text" dangerouslySetInnerHTML={{__html: itemData.post_content}} />
        </div>
      </article>
    </Layout>
  );
}