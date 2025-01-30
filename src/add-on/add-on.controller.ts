import { Controller, Post, Body, HttpCode, Req } from '@nestjs/common';
import { google } from 'googleapis';
import asyncHandler from 'express-async-handler';
import { OAuth2Client } from 'google-auth-library';
import { gmail } from 'googleapis/build/src/apis/gmail';

@Controller('addon')
export class AddOnController {
  @Post('render')
  @HttpCode(200)
  async renderHomepage(@Body() body: any, @Req() req: any) {
    console.log('endpoint called');
    console.log('body:', JSON.stringify(body, null, 2));
    const currentMessageId = req.body.gmail.messageId;
    console.log('currentMessageId:', currentMessageId);
    const event = req.body;
    console.log('event:', JSON.stringify(event, null, 2));
    const accessToken = event.authorizationEventObject.userOAuthToken;
    console.log('accessToken:', accessToken);
    const messageToken = event.gmail.accessToken;
    console.log('messageToken:', messageToken);
    const auth = new OAuth2Client();
    auth.setCredentials({ access_token: accessToken });

    const gmailResponse = await gmail['users'].messages.get({
      id: currentMessageId,
      userId: 'me',
      format: 'metadata',
      auth,
      headers: { 'X-Goog-Gmail-Access-Token': messageToken },
    });

    console.log('gmailResponse:', JSON.stringify(gmailResponse, null, 2));
    return {
      action: {
        navigations: [
          {
            pushCard: {
              header: {
                title: 'Cats!',
              },
              sections: [
                {
                  widgets: [
                    {
                      textParagraph: {
                        text: 'Your random cat:',
                      },
                    },
                    {
                      image: {
                        imageUrl: 'https://cataas.com/cat',
                      },
                    },
                  ],
                },
              ],
            },
          },
        ],
      },
    };
    // return {
    //   cards: [
    //     {
    //       header: {
    //         title: 'Welcome to My Add-on',
    //       },
    //       sections: [
    //         {
    //           widgets: [
    //             {
    //               textParagraph: {
    //                 text: 'This is a basic example of Card-based UI.',
    //               },
    //             },
    //             {
    //               buttonSet: {
    //                 buttons: [
    //                   {
    //                     textButton: {
    //                       text: 'Open React Component',
    //                       onClick: {
    //                         openLink: {
    //                           url: 'https://your-react-app-url.com', // Replace with React app URL
    //                         },
    //                       },
    //                     },
    //                   },
    //                 ],
    //               },
    //             },
    //           ],
    //         },
    //       ],
    //     },
    //   ],
    // };
  }
}
