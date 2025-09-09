'use client'
import { FaUser, FaTwitter, FaLinkedin, FaFacebook, FaHeart } from "react-icons/fa"
import { IoIosLink } from "react-icons/io";

import { Button } from "../ui/Button"
import { Card } from "../ui/Card"
import Image from "next/image"
import Link from "next/link";
import { LuSend } from "react-icons/lu"

export default function BlogPost() {
    return (
        <div className="bg-white relative pt-20 px-4 mt-6 dark:bg-white">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex px-12 gap-2 mb-6">
                    <div className="inline-flex items-center px-3 py-1.5 bg-gray-50 rounded-xl text-sm">
                        <span className="bg-white rounded-full text-lg font-medium px-3">Leadership</span>
                        <p className="text-lg font-medium text-[#667085]">
                            8 min read
                        </p>
                    </div>
                </div>
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
                        Bill Walsh leadership lessons
                    </h1>
                    <p className="text-lg text-gray-600 text-pretty">
                        Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?
                    </p>
                    <p className="text-lg text-gray-600 text-pretty">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                {/* Hero Image */}
                <div className="mb-8">
                    <Image
                        src="/BlogsDetailsHero.png"
                        alt="Leadership concept with hands protecting a green circular element surrounded by business icons"
                        width={1220}
                        height={540}
                        className="object-cover rounded-lg"
                    />
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                            <FaUser className="h-5 w-5 text-gray-600" />
                        </div>
                        <div>
                            <p className="font-medium text-gray-900">Written by Alex Whitman</p>
                            <p className="text-sm text-gray-500">Published 17 Jan 2022</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500 mr-2">Copy link</span>
                        <Button variant="outline">
                            <FaTwitter className="h-4 w-4" />
                        </Button>
                        <Button variant='outline'>
                            <FaFacebook className="h-4 w-4" />
                        </Button>
                        <Button variant='outline'>
                            <FaLinkedin className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Introduction */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Introduction</h2>
                            <div className="prose prose-lg max-w-none">
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Sapien lorem mattis nunc amet tellus. Egestas vitae orci bibendum faucibus vitae. Nibh placerat cursus
                                    risus amet. Pellentesque consectetur tellus mauris tellus. Mauris cursus tellus mauris tellus mauris
                                    tellus mauris tellus.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Eget sit in risus, faucibus placerat, semper. Eget vulputate risus sit vulputate risus, sed vulputate.
                                    Pretium feugiat quis lorem eget. Quis sit vulputate risus sit vulputate risus, sed vulputate. Pretium
                                    feugiat quis lorem eget. Quis sit vulputate risus sit vulputate. Pretium feugiat quis lorem eget.
                                </p>
                            </div>
                        </section>

                        {/* Hero Image */}
                        <div className="mb-8">
                            <Image
                                src="/intro1.png"
                                alt="Leadership concept with hands protecting a green circular element surrounded by business icons"
                                width={740}
                                height={480}
                                className="object-cover rounded-lg"
                            />
                        </div>

                        {/* Author Info */}
                        <div className="flex items-center justify-between mb-8 pb-6">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10rounded-full flex items-center justify-center">
                                    <IoIosLink className="h-5 w-5 text-gray-600" />
                                </div>
                                <div className="flex gap-2">
                                    <p className="text-gray-500">Image courtesy of Moose Photos via</p>
                                    <Link href="#" className="text-gray-500 underline">Pexels</Link>
                                </div>
                            </div>

                        </div>

                        {/* Business Meeting Image */}
                        <div className="mb-8">
                            <p className="text-xl text-gray-500">Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.</p>
                        </div>

                        {/* Quote Section */}
                        <Card className="p-6 mb-8 border-l-4 border-l-gray-500">
                            <blockquote className="text-lg text-gray-800 mb-4">
                                “In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.”
                            </blockquote>
                            <div className="flex items-center gap-3">
                                <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">
                                    <Image src='/BlogDetailsAvatar1.png' width={48} height={48} alt="product designer" className="object-cover rounded-full" />
                                </div>
                                <div>
                                    <p className="font-medium text-sm">Steve Ray</p>
                                    <p className="text-xs text-gray-500">Product Manager</p>
                                </div>
                            </div>

                        </Card>
                        <p className="text-sm text-gray-500">Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
                            Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
                            Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
                            Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.
                            Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.</p>
                        {/* Software and Tools Section */}

                        <section className="mb-12 mt-8">
                            <h2 className="text-3xl font-medium text-gray-900 mb-3">Software and tools</h2>
                            <div className="prose prose-lg max-w-none">
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
                                </p>
                            </div>
                        </section>

                        {/* Other Resources Section */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-medium text-gray-900 mb-6">Other resources</h2>
                            <div className="prose prose-lg max-w-none">
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.
                                </p>
                                <ol className="list-decimal list-inside pl-6 space-y-2 text-gray-700">
                                    <li>Lectus id duis vitae porttitor enim gravida morbi</li>
                                    <li>Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.</li>

                                    <li>Suspendisse maecenas ac donec scelerisque diam sed est duis purus.</li>
                                </ol>
                            </div>
                        </section>

                        {/* Bottom Image */}
                        <div className="mb-8">
                            <Image
                                src="/intro2.png"
                                alt="Team collaboration around laptop"
                                width={740}
                                height={480}
                                className="object-cover rounded-lg"
                            />
                        </div>

                        {/* Author Bio */}
                        <div className="flex items-center justify-between mb-2 pb-6">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10rounded-full flex items-center justify-center">
                                    <IoIosLink className="h-5 w-5 text-gray-600" />
                                </div>
                                <div className="flex gap-2">
                                    <p className="text-gray-500">Image courtesy of Helena Lopes via</p>
                                    <Link href="#" className="text-gray-500 underline">Pexels</Link>
                                </div>
                            </div>

                        </div>

                        <p className="text-gray-500">Lectus leo massa amet posuere. Malesuada mattis non convallis quisque. Libero sit et imperdiet bibendum quisque dictum vestibulum in non. Pretium ultricies tempor non est diam. Enim ut enim amet amet integer cursus. Sit ac commodo pretium sed etiam turpis suspendisse at.
                            Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.</p>

                        <Card className="flex items-start gap-4 p-6 mb-8 border border-gray-200 rounded-xl mt-9">
                            {/* Avatar */}
                            <div className="h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center">
                                <Image src='/BlogDetailsAvatar1.png' width={72} height={72} alt="product designer" className="object-cover rounded-full" />
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <h3 className="font-medium text-2xl text-black mb-1">
                                    Written by Stephan Joppich
                                </h3>
                                <p className="text-base text-black mb-2">14.3K followers • 14.3K followers</p>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    Engineer turned philosophy student • I write about loneliness,
                                    transformative books, and other pseudo-deep stuff that keeps me up
                                    at night •
                                </p>
                            </div>
                        </Card>

                        {/* Responses Section */}
                        <section className="mt-9">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Responses (234)</h2>
                            {/* Input field for new response */}
                            <div className="flex items-start gap-3 mb-8">
                                {/* Avatar */}
                                <div className="h-10 w-10">
                                    <Image
                                        src="/BlogDetailsAvatar1.png"
                                        width={40}
                                        height={40}
                                        alt="User avatar"
                                        className="object-cover rounded-full"
                                    />
                                </div>

                                {/* Input */}
                                <input
                                    type="text"
                                    placeholder="What are your thoughts?"
                                    className="flex-1 bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>
                            <div className="space-y-6">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex items-start gap-3 pb-6  last:border-b-0">
                                        <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">
                                            <Image src='/BlogDetailsAvatar1.png' width={48} height={48} alt="product designer" className="object-cover rounded-full" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="font-medium text-sm">Stephen Jappich</span>

                                            </div>
                                            <p className="text-sm text-gray-700 mb-2">
                                                Thinking about it now, I really should stop writing these lines — and waste some of my precious time.
                                            </p>
                                            <div className="flex items-center gap-4 text-xs text-gray-500">
                                                <button className="flex items-center gap-1 hover:text-gray-700">
                                                    <FaHeart className="h-3 w-3" />
                                                    Like
                                                </button>
                                                <button className="hover:text-gray-700">Reply</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="top-8">
                            {/* Horizontal Card */}
                            <Card className="p-4 mb-6 shadow-md border-b border-gray-200 pb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-6xl text-gray-100 font-semibold">01</span>
                                    </div>
                                    <div>
                                        <p className="inline-flex items-center text-xs text-gray-600 mb-1 px-2 py-1 border border-gray-300 rounded-md shadow-sm">
                                            <span className="h-1.5 w-1.5 bg-blue-700 rounded-full mr-2"></span>
                                            leadership • 8min
                                        </p>
                                        <h4 className="font-medium text-gray-900">Bill Walsh leadership lesson</h4>
                                    </div>
                                </div>
                            </Card>
                            <Card className="p-4 mb-6 shadow-md border-b border-gray-200 pb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-6xl text-gray-100 font-semibold">02</span>
                                    </div>
                                    <div>
                                        <p className="inline-flex items-center text-xs text-gray-600 mb-1 px-2 py-1 border border-gray-300 rounded-md shadow-sm">
                                            <span className="h-1.5 w-1.5 bg-blue-700 rounded-full mr-2"></span>
                                            leadership • 8min
                                        </p>
                                        <h4 className="font-medium text-gray-900">Bill Walsh leadership lesson</h4>
                                    </div>
                                </div>
                            </Card>
                            <Card className="p-4 mb-6 shadow-md border-b border-gray-200 pb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-6xl text-gray-100 font-semibold">03</span>
                                    </div>
                                    <div>
                                        <p className="inline-flex items-center text-xs text-gray-600 mb-1 px-2 py-1 border border-gray-300 rounded-md shadow-sm">
                                            <span className="h-1.5 w-1.5 bg-blue-700 rounded-full mr-2"></span>
                                            leadership • 8min
                                        </p>
                                        <h4 className="font-medium text-gray-900">Bill Walsh leadership lesson</h4>
                                    </div>
                                </div>
                            </Card>
                            <Card className="p-4 mb-6 shadow-md border-b border-gray-200 pb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-6xl text-gray-100 font-semibold">04</span>
                                    </div>
                                    <div>
                                        <p className="inline-flex items-center text-xs text-gray-600 mb-1 px-2 py-1 border border-gray-300 rounded-md shadow-sm">
                                            <span className="h-1.5 w-1.5 bg-blue-700 rounded-full mr-2"></span>
                                            leadership • 8min
                                        </p>
                                        <h4 className="font-medium text-gray-900">Bill Walsh leadership lesson</h4>
                                    </div>
                                </div>
                            </Card>
                            <Card className="p-4 mb-6 shadow-md border-b border-gray-200 pb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-6xl text-gray-100 font-semibold">05</span>
                                    </div>
                                    <div>
                                        <p className="inline-flex items-center text-xs text-gray-600 mb-1 px-2 py-1 border border-gray-300 rounded-md shadow-sm">
                                            <span className="h-1.5 w-1.5 bg-blue-700 rounded-full mr-2"></span>
                                            leadership • 8min
                                        </p>
                                        <h4 className="font-medium text-gray-900">Bill Walsh leadership lesson</h4>
                                    </div>
                                </div>
                            </Card>
                            <Card className="p-4 mb-6 shadow-md border-b border-gray-200 pb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-6xl text-gray-100 font-semibold">06</span>
                                    </div>
                                    <div>
                                        <p className="inline-flex items-center text-xs text-gray-600 mb-1 px-2 py-1 border border-gray-300 rounded-md shadow-sm">
                                            <span className="h-1.5 w-1.5 bg-blue-700 rounded-full mr-2"></span>
                                            leadership • 8min
                                        </p>
                                        <h4 className="font-medium text-gray-900">Bill Walsh leadership lesson</h4>
                                    </div>
                                </div>
                            </Card>
                            <Card className="p-4 mb-6 shadow-md border-b border-gray-200 pb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-6xl text-gray-100 font-semibold">07</span>
                                    </div>
                                    <div>
                                        <p className="inline-flex items-center text-xs text-gray-600 mb-1 px-2 py-1 border border-gray-300 rounded-md shadow-sm">
                                            <span className="h-1.5 w-1.5 bg-blue-700 rounded-full mr-2"></span>
                                            leadership • 8min
                                        </p>
                                        <h4 className="font-medium text-gray-900">Bill Walsh leadership lesson</h4>
                                    </div>
                                </div>
                            </Card>




                            {/* Newsletter Signup */}
                            <div className="p-6 bg-[#ebfff8] rounded-lg shadow-md border-t-4 border-teal-600">
                                {/* Icon */}
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                                    <LuSend className="text-black" size={20} />
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-medium text-gray-900 mb-2">Weekly newsletter</h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    No spam. Just the latest releases and tips, interesting articles, and
                                    exclusive interviews in your inbox every week.
                                </p>

                                {/* Email Input */}
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm mb-3"
                                />

                                {/* Subscribe Button */}
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 bg-[#00A86B] text-white rounded-lg text-sm mb-4"
                                >
                                    Subscribe
                                </button>

                                {/* Privacy link */}
                                <a
                                    href="#"
                                    className="inline-block text-sm text-teal-700 hover:underline"
                                >
                                    Read about our privacy policy
                                </a>
                                <p className="text-sm text-gray-600 mt-2">We respect your privacy.</p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
