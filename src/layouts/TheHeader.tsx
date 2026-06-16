import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Divider
} from '@mui/material';
import { Globe, ChevronDown, Menu, X, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { navbarConfig } from '../config/navbar';

import logo from '../assets/logo.png';

import { useNavbarStore } from '../states/useNavbarStore';
import { motion, AnimatePresence } from 'framer-motion';

export default function TheHeader() {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [subExpanded, setSubExpanded] = useState<string | null>(null);

  const {
    mobileOpen,
    toggleMobileOpen,
    activeMenuStack,
    pushMenu,
    popMenu,
    resetMenu
  } = useNavbarStore();

  const toggleLanguage = () => {
    const currentLang = i18n?.language || 'th';
    const newLang = currentLang === 'en' ? 'th' : 'en';
    i18n?.changeLanguage(newLang);
  };

  const handleDrawerToggle = () => {
    toggleMobileOpen();
    if (mobileOpen) {
      resetMenu();
      setSubExpanded(null);
    }
  };

  const currentMenu = activeMenuStack.length > 0 ? activeMenuStack[activeMenuStack.length - 1] : null;
  const menuItems = currentMenu ? (currentMenu.children || []) : navbarConfig;

  const handleSubItemClick = (label: string) => {
    setSubExpanded(subExpanded === label ? null : label);
  };

  const MobileMenuContent = (
    <Box className="w-[50vw] h-full flex flex-col bg-white overflow-hidden">
      <Box className="p-4 flex justify-between items-center border-b border-slate-100 bg-white z-10">
        <div className="flex items-center gap-2">
          {activeMenuStack.length > 0 && (
            <IconButton onClick={() => { popMenu(); setSubExpanded(null); }} size="small" className="mr-1">
              <ChevronRight size={24} className="rotate-180 text-slate-600" />
            </IconButton>
          )}
        </div>
        <IconButton onClick={handleDrawerToggle} color="inherit">
          <X size={24} className="text-slate-600" />
        </IconButton>
      </Box>

      {currentMenu && (
        <Box className="bg-slate-50 px-6 py-3 border-b border-slate-100">
          <Typography className="font-bold text-cyan-600 text-sm uppercase tracking-wider">
            {t(currentMenu.label)}
          </Typography>
        </Box>
      )}

      <div className="flex-grow relative bg-white">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentMenu ? currentMenu.label : 'root'}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute inset-0 h-full w-full"
          >
            <List className="py-4 overflow-y-auto h-full">
              {menuItems.map((item, idx) => {
                const hasChildren = item.children && item.children.length > 0;
                const isSubExpanded = subExpanded === item.label;

                return (
                  <React.Fragment key={idx}>
                    <ListItem disablePadding className="flex flex-col items-stretch w-full">
                      <ListItemButton
                        onClick={() => {
                          if (hasChildren) {
                            if (!currentMenu) {
                              pushMenu(item);
                            } else {
                              handleSubItemClick(item.label);
                            }
                          } else if (item.path) {
                            toggleMobileOpen();
                            resetMenu();
                          }
                        }}
                        component={!hasChildren && item.path ? Link : 'div'}
                        to={!hasChildren && item.path ? item.path : undefined}
                        className="py-3 px-6 hover:bg-slate-50 border-b border-slate-50/50 w-full"
                      >
                        <ListItemText
                          primary={t(item.label)}
                          slotProps={{
                            primary: {
                              className: `font-bold ${hasChildren ? "text-slate-800" : "text-slate-600"}`
                            }
                          }}
                        />
                        {hasChildren && (
                          !currentMenu ? (
                            <ChevronRight size={18} className="text-slate-300" />
                          ) : (
                            isSubExpanded ? <ChevronDown size={18} className="text-slate-400" /> : <ChevronRight size={18} className="text-slate-300" />
                          )
                        )}
                      </ListItemButton>

                      {/* Dropdown for sub-menu items */}
                      {currentMenu && hasChildren && (
                        <Collapse in={isSubExpanded} timeout="auto" unmountOnExit className="w-full">
                          <List component="div" disablePadding className="bg-slate-50/50 w-full">
                            {item.children?.map((child, cIdx) => (
                              <ListItemButton
                                key={cIdx}
                                component={Link}
                                to={child.path || '#'}
                                onClick={handleDrawerToggle}
                                sx={{ pl: '42px !important' }}
                                className="py-2 w-full"
                              >
                                <ListItemText
                                  primary={t(child.label)}
                                  slotProps={{
                                    primary: { className: "text-slate-600 text-sm font-medium" }
                                  }}
                                />
                              </ListItemButton>
                            ))}
                          </List>
                        </Collapse>
                      )}
                    </ListItem>
                  </React.Fragment>
                );
              })}
            </List>
          </motion.div>
        </AnimatePresence>
      </div>

      <Divider className="opacity-50" />

      <Box className="p-6 flex flex-col gap-3 bg-white z-10">
        <Button
          fullWidth
          variant="outlined"
          color="primary"
          className="rounded-xl py-3 border-slate-200 text-slate-700 font-bold"
          onClick={toggleLanguage}
          startIcon={<Globe size={18} />}
        >
          {i18n.language.toUpperCase() === 'TH' ? 'English (EN)' : 'ภาษาไทย (TH)'}
        </Button>
      </Box>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      elevation={0}
      color="inherit"
      className="bg-white/80 backdrop-blur-lg border-b border-slate-200/50"
    >
      <Container maxWidth="xl">
        <Toolbar className="flex justify-between items-center px-0 min-h-[100px]">
          {/* 1. Mobile Hamburger Icon (Left on mobile, hidden on lg+) */}
          <IconButton
            onClick={handleDrawerToggle}
            color="inherit"
            sx={{ display: { xs: 'flex', lg: 'none' }, '@media (min-width: 1024px)': { display: 'none' } }}
            className="p-2 rounded-xl bg-slate-50 border border-slate-100 shadow-sm"
          >
            <Menu size={24} className="text-slate-700" />
          </IconButton>

          {/* 2. Logo area (Left on desktop, Right on mobile) */}
          <Link
            to="/"
            className="flex items-center gap-2 no-underline cursor-pointer lg:mr-4 order-last lg:order-first"
          >
            <img src={logo} alt="NexusUI Logo" className="h-10 w-auto object-contain" />
          </Link>

          {/* 3. Desktop Navigation (Hidden on mobile/tablet) */}
          <div className="hidden lg:flex items-center flex-1 justify-center gap-1">
            {navbarConfig.map((item, index) => {
              const isActive = item.path && location.pathname === item.path;

              if (item.type === 'mega' && item.children) {
                return (
                  <div key={index} className="relative group">
                    <Button
                      color="inherit"
                      className="text-slate-600 hover:text-cyan-600 font-medium px-3 py-2 rounded-lg whitespace-nowrap"
                      endIcon={<ChevronDown size={14} className="opacity-50 transition-transform group-hover:rotate-180" />}
                    >
                      {t(item.label)}
                    </Button>

                    <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block pt-4 z-50">
                      <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 w-[1100px] max-w-[90vw] relative">
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-slate-100 transform rotate-45"></div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                          {item.children.map((col, colIdx) => (
                            <div key={colIdx} className="flex flex-col">
                              <Typography variant="subtitle2" className="text-cyan-600 font-bold mb-4 tracking-tight border-b border-slate-100 pb-2">
                                {t(col.label)}
                              </Typography>
                              <div className="flex flex-col gap-3">
                                {col.children?.map((child, cIdx) => (
                                  <Link
                                    key={cIdx}
                                    to={child.path || '#'}
                                    className="text-slate-500 hover:text-cyan-600 no-underline text-sm font-medium transition-transform hover:translate-x-1 inline-block"
                                  >
                                    {t(child.label)}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              if (item.children) {
                return (
                  <div key={index} className="relative group">
                    <Button
                      color="inherit"
                      className="text-slate-600 hover:text-cyan-600 font-medium px-3 py-2 rounded-lg whitespace-nowrap"
                      endIcon={<ChevronDown size={14} className="opacity-50 transition-transform group-hover:rotate-180" />}
                    >
                      {t(item.label)}
                    </Button>

                    <div className="absolute top-full left-0 hidden group-hover:block pt-4 w-max z-50">
                      <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-2 min-w-[280px] max-w-[360px] flex flex-col relative">
                        <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-t border-l border-slate-100 transform rotate-45"></div>

                        {item.children.map((child, cIdx) => (
                          <Link
                            key={cIdx}
                            to={child.path || '#'}
                            className="px-4 py-3 rounded-xl text-slate-600 hover:text-cyan-600 hover:bg-cyan-50 no-underline text-sm font-medium transition-colors border border-transparent hover:border-cyan-100"
                          >
                            {t(child.label)}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Button
                  key={index}
                  component={Link}
                  to={item.path || '#'}
                  color="inherit"
                  className={`font-medium px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${isActive ? 'text-cyan-600 bg-cyan-50' : 'text-slate-600 hover:text-cyan-600 hover:bg-slate-50'}`}
                >
                  {t(item.label)}
                </Button>
              );
            })}
          </div>

          {/* 4. Desktop Right side Wrapper */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-3">
              <IconButton onClick={toggleLanguage} color="primary" className="border border-cyan-100 bg-cyan-50/50 hover:bg-cyan-100 transition-colors" size="small">
                <Globe size={18} className="text-cyan-600" />
                <span className="text-xs font-bold ml-1 text-cyan-700 uppercase">
                  {i18n?.language || 'EN'}
                </span>
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        slotProps={{
          paper: {
            className: "w-[50vw] shadow-2xl"
          }
        }}
        className="lg:hidden"
      >
        {MobileMenuContent}
      </Drawer>
    </AppBar>
  );
}
