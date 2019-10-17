import express from 'express';
import { User } from '../entity/User';
import { createSecureServer } from 'http2';


function isMembercreated(user : User)
{
    return user.id;
}


