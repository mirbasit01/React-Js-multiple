import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
    return (
        <section style={{ position: 'relative', overflow: 'hidden', padding: '10px', backgroundColor: '#cbd5e0', borderTop: '2px solid black' }}>
            <div style={{ position: 'relative', zIndex: 10, margin: '0 auto', maxWidth: '112rem', padding: '0 1rem' }}>
                <div style={{ margin: '-1.5rem', display: 'flex', flexWrap: 'wrap' }}>
                    <div style={{ width: '100%', padding: '1.5rem', flex: '0 0 50%', maxWidth: '50%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                            <div style={{ marginBottom: '1rem', display: 'inline-flex', alignItems: 'center' }}>
                                <Logo width="100px" />
                            </div>
                            <div>
                                <p style={{ fontSize: '0.875rem', color: '#718096' }}>
                                    &copy; Copyright 2023. All Rights Reserved by DevUI.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: '100%', padding: '1.5rem', flex: '0 0 16.666667%', maxWidth: '16.666667%' }}>
                        <div style={{ height: '100%' }}>
                            <h3 style={{ letterSpacing: '0.1em', marginBottom: '2.25rem', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', color: '#a0aec0' }}>
                                Company
                            </h3>
                            <ul>
                                <li style={{ marginBottom: '1rem' }}>
                                    <Link style={{ fontSize: '1rem', fontWeight: '500', color: '#1a202c', textDecoration: 'none' }} to="/">
                                        Features
                                    </Link>
                                </li>
                                <li style={{ marginBottom: '1rem' }}>
                                    <Link style={{ fontSize: '1rem', fontWeight: '500', color: '#1a202c', textDecoration: 'none' }} to="/">
                                        Pricing
                                    </Link>
                                </li>
                                <li style={{ marginBottom: '1rem' }}>
                                    <Link style={{ fontSize: '1rem', fontWeight: '500', color: '#1a202c', textDecoration: 'none' }} to="/">
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link style={{ fontSize: '1rem', fontWeight: '500', color: '#1a202c', textDecoration: 'none' }} to="/">
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div style={{ width: '100%', padding: '1.5rem', flex: '0 0 16.666667%', maxWidth: '16.666667%' }}>
                        <div style={{ height: '100%' }}>
                            <h3 style={{ letterSpacing: '0.1em', marginBottom: '2.25rem', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', color: '#a0aec0' }}>
                                Support
                            </h3>
                            <ul>
                                <li style={{ marginBottom: '1rem' }}>
                                    <Link style={{ fontSize: '1rem', fontWeight: '500', color: '#1a202c', textDecoration: 'none' }} to="/">
                                        Account
                                    </Link>
                                </li>
                                <li style={{ marginBottom: '1rem' }}>
                                    <Link style={{ fontSize: '1rem', fontWeight: '500', color: '#1a202c', textDecoration: 'none' }} to="/">
                                        Help
                                    </Link>
                                </li>
                                <li style={{ marginBottom: '1rem' }}>
                                    <Link style={{ fontSize: '1rem', fontWeight: '500', color: '#1a202c', textDecoration: 'none' }} to="/">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link style={{ fontSize: '1rem', fontWeight: '500', color: '#1a202c', textDecoration: 'none' }} to="/">
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div style={{ width: '100%', padding: '1.5rem', flex: '0 0 25%', maxWidth: '25%' }}>
                        <div style={{ height: '100%' }}>
                            <h3 style={{ letterSpacing: '0.1em', marginBottom: '2.25rem', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', color: '#a0aec0' }}>
                                Legals
                            </h3>
                            <ul>
                                <li style={{ marginBottom: '1rem' }}>
                                    <Link style={{ fontSize: '1rem', fontWeight: '500', color: '#1a202c', textDecoration: 'none' }} to="/">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li style={{ marginBottom: '1rem' }}>
                                    <Link style={{ fontSize: '1rem', fontWeight: '500', color: '#1a202c', textDecoration: 'none' }} to="/">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link style={{ fontSize: '1rem', fontWeight: '500', color: '#1a202c', textDecoration: 'none' }} to="/">
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
