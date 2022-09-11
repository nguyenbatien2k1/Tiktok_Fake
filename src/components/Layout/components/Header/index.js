import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import images from '~/assets/images';

// Tippy
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faCloudUpload,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faMessage,
    faSignOut,
    faSpinner,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shotcuts',
    },
];

function Header() {
    const [result, setResult] = useState([]);

    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setResult([]);
        }, 0);
    }, []);

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
        switch (menuItem.type) {
            case 'language':
                //Todo
                break;
            default:
                throw new Error('Error!!!!!!');
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@young._.boy',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />
                <HeadlessTippy
                    interactive
                    visible={result.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload Video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                            <Tippy content="Chat" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>

                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={ currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <img
                                className={cx('user-avatar')}
                                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEA8QEhASFhMVERAVERYSEBIXEhAYFREXIhUTFRMaHighGBolHhcTITIiMSorLi4uFyAzRDMsNyguLi0BCgoKDg0OFxAQFysfHSYtKy0rNzcvLy0tKysyKzU3NysuKy0rKysrLSs3LS4tLTcrKy0uKy0rNystKzcrOCs3N//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYBAgQDBwj/xABGEAACAgIABAMEBgUJBQkAAAABAgADBBEFEiExBhNBIlFhcRQjMkKBkVJigpKhBxUkM0Nyc8HCFlODsbMIJTV1k5Sio6T/xAAYAQEBAAMAAAAAAAAAAAAAAAAAAQIDBP/EABsRAQEBAQADAQAAAAAAAAAAAAABEQIDITES/9oADAMBAAIRAxEAPwD7hERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERBMBERARITxJ4swuHqDkXAMRtK1Be6z+7WOuvj2+M+fZv8sF1jivD4eWY75RY7Pa+vdRSGP/ygfXIkB4a4xfaz0ZVapetVNo5A6rZXaDo8rdVZWV0ZdnsD97Qn9wERuNwERuNwERuNwERuNwERuNwERuICIiAiIgJzcRz6sep7rnVK0Us7N2A/zPpr1nTKx4ywUy7eH4VnWqy66y1QSOdaaG5Rse6x6m/ZEDzq/lH4Ox19OrX/ABEtQfm6gSw4HEaMheem6u1f0qrFcfmpnxZP5P0yDaMHNLsnP5a5SVIMkI2napqzzcgbS85TRJGtg7kP4G8PZt+aGxlbHsot1k2spApKt7VLAEeax19jtrqemtxX2bxLxDIavKxqsbJW01WfRblC+TbYKyyrzoxarZHLtgo369ROnITiNzEK9GPV00wRrshgVG+h5UrIJI+/2nbwnhwx6+QPZYSSz2WuWssdvtMT2H90AADoABO2VFebwilmvpGXnXH9bLepT+xj+Wv8Jt/sRwz1w62/xC7n82Jk/ECvnwRwz0xET41NZWfzRhNB4TNQ/oufm0/Br/pFf4rkBzr5ESxzxry62seoOpsQIXQEcyB98hI9AdNr5GB8X49/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"
                                alt="Nguyen Ba Tien"
                            ></img>
                        ) : (
                            <button className={cx('more')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
