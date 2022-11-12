// This file will contain a page component
// that will be served for the route /types/:type.
// The named parameter type will be replaced
// with slugified pet animal types, such as dog and small-furry.

import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
export interface TypePageProps {

}

export const getStaticProps: GetStaticProps = async () => {

};

export const getStaticPaths: GetStaticPaths = async () => {

};

const TypePage: NextPage<TypePageProps> = () => (
    <main>
        <section className="relative mb-7" id="overview">
            <h1 className="text-7xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
                Lorem Ipsum
            </h1>
            <p className="mt-7 text-2xl text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </section>
        <section className="relative mb-7" id="recently-adopted">
            <h3 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-7">
                Recently Adopted
            </h3>
        </section>
    </main>
);

export default TypePage;