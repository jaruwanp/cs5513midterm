import Head from 'next/head';
import Link from 'next/link';

export default function Layout( { children, home } ) {
  return (
    <div>
      <Link href="/">
        <a title='Home'>
        <div className="container-fluid page_heder">Weeks 14-15: Assignment 14: Final Headless CMS-Powered App</div>
        </a>
        </Link>
        <img src="images/header.gif" alt="" className="img-fluid"/>
        {!home && (
          <Link href="/wordpress">
          <a title='Go back home' className="btn secondary mt-3">← Back to Wordpress Home</a>
        </Link>
        )
      }
   
     
      <main>{children}</main>

      {!home && (
          <Link href="/wordpress">
          <a title='Go back home' className="btn secondary mt-3">← Back to Wordpress Home</a>
        </Link>
        )
      }
<footer>
        <div className="webFooter text-center">
    <p className="text-center mt-1">Weeks 14-15: Assignment 14: Final Headless CMS-Powered App</p>
    by Jaruwan Pattanasing</div>
      </footer>
    </div>
  );
}