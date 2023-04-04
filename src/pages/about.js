import * as React from 'react';
import { Link } from 'gatsby';
import Seo from '../components/seo';
import Layout from '../components/layout';

const AboutPage = () => {
    return (
        <Layout pageTitle="About me">
            <Link to="/">Back to Home</Link>
            <p>bla bla bla...</p>

        </Layout>
    );
};

export const Head = () => <Seo title="About Me" />;
export default AboutPage;