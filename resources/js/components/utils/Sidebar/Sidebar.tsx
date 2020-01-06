import React, { useContext } from "react";
import { MainContext } from "./../../MainContext";

const Sidebar = () => {
    const context = useContext(MainContext);

    return (
        <div className="sidebar">
            <ul>
                <li>
                    <div className="sidebar__item">
                        {context.activeMenuSection === "Dashboard" && (
                            <div className="active-sidebar-item"></div>
                        )}
                        <a
                            href="#"
                            onClick={() => {
                                context.changePath("/dashboard");
                                context.handlAactiveMenuSection("Dashboard");
                            }}
                        >
                            <img
                                className="sidebar-icon"
                                src="/images/stats.png"
                                alt="Icon made by Freepik from www.flaticon.com"
                                title="Dashboard"
                            />
                        </a>
                        {context.showSidebarText && (
                            <a
                                href="#"
                                onClick={() => {
                                    context.changePath("/dashboard");
                                    context.handlAactiveMenuSection(
                                        "Dashboard"
                                    );
                                }}
                            >
                                <p className="sidebar__item--text">Dashboard</p>
                            </a>
                        )}
                    </div>
                </li>
                <li>
                    <div className="sidebar__item">
                        {context.activeMenuSection === "Users" && (
                            <div className="active-sidebar-item"></div>
                        )}
                        <a
                            href="#"
                            onClick={() => {
                                context.changePath("/users");
                                context.handlAactiveMenuSection("Users");
                            }}
                        >
                            <img
                                className="sidebar-icon"
                                src="/images/group.png"
                                alt="Icon made by Freepik from www.flaticon.com"
                                title="Users"
                            />
                        </a>
                        {context.showSidebarText && (
                            <a
                                href="#"
                                onClick={() => {
                                    context.changePath("/users");
                                    context.handlAactiveMenuSection("Users");
                                }}
                            >
                                <p className="sidebar__item--text">Users</p>
                            </a>
                        )}
                    </div>
                </li>
                <li>
                    <div className="sidebar__item">
                        {context.activeMenuSection === "Forum Categories" && (
                            <div className="active-sidebar-item"></div>
                        )}
                        <a
                            href="#"
                            onClick={() => {
                                context.changePath("/forum-categories");
                                context.handlAactiveMenuSection(
                                    "Forum Categories"
                                );
                            }}
                        >
                            <img
                                className="sidebar-icon"
                                src="/images/forum-icon.png"
                                alt="Icon made by Freepik from www.flaticon.com"
                                title="Forum Categories"
                            />
                        </a>
                        {context.showSidebarText && (
                            <a
                                href="#"
                                onClick={() => {
                                    context.changePath("/forum-categories");
                                    context.handlAactiveMenuSection(
                                        "Forum Categories"
                                    );
                                }}
                            >
                                <p className="sidebar__item--text">
                                    Forum Categories
                                </p>
                            </a>
                        )}
                    </div>
                </li>
                <li>
                    <div className="sidebar__item">
                        {context.activeMenuSection === "Hobbies" && (
                            <div className="active-sidebar-item"></div>
                        )}
                        <a
                            href="#"
                            onClick={() => {
                                context.changePath("/hobbies");
                                context.handlAactiveMenuSection("Hobbies");
                            }}
                        >
                            <img
                                className="sidebar-icon"
                                src="/images/ball.png"
                                alt="Icon made by Freepik from www.flaticon.com"
                                title="Hobbies"
                            />
                        </a>
                        {context.showSidebarText && (
                            <a
                                href="#"
                                onClick={() => {
                                    context.changePath("/hobbies");
                                    context.handlAactiveMenuSection("Hobbies");
                                }}
                            >
                                <p className="sidebar__item--text">
                                    Hobbies List
                                </p>
                            </a>
                        )}
                    </div>
                </li>
                <li>
                    <div className="sidebar__item">
                        {context.activeMenuSection === "Translations" && (
                            <div className="active-sidebar-item"></div>
                        )}
                        <a
                            href="#"
                            onClick={() => {
                                context.changePath("/translations");
                                context.handlAactiveMenuSection("Translations");
                            }}
                        >
                            <img
                                className="sidebar-icon"
                                src="/images/translator.png"
                                alt="Icon made by Freepik from www.flaticon.com"
                                title="Translations"
                            />
                        </a>
                        {context.showSidebarText && (
                            <a
                                href="#"
                                onClick={() => {
                                    context.changePath("/translations");
                                    context.handlAactiveMenuSection(
                                        "Translations"
                                    );
                                }}
                            >
                                <p className="sidebar__item--text">
                                    Translations
                                </p>
                            </a>
                        )}
                    </div>
                </li>
                <li>
                    <div className="sidebar__item">
                        {context.activeMenuSection === "Register" && (
                            <div className="active-sidebar-item"></div>
                        )}
                        <a
                            href="#"
                            onClick={() => {
                                context.changePath("/register");
                                context.handlAactiveMenuSection("Register");
                            }}
                        >
                            <img
                                className="sidebar-icon"
                                src="/images/avatar.png"
                                alt="Icon made by Gregor Cresnar from www.flaticon.com"
                                title="Register"
                            />
                        </a>
                        {context.showSidebarText && (
                            <a
                                href="#"
                                onClick={() => {
                                    context.changePath("/register");
                                    context.handlAactiveMenuSection("Register");
                                }}
                            >
                                <p className="sidebar__item--text">Register</p>
                            </a>
                        )}
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
