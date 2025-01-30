import { Controller, Post, Body, HttpCode } from '@nestjs/common';

@Controller('addon')
export class AddOnController {
  @Post('render')
  @HttpCode(200)
  renderHomepage(@Body() body: any) {
    console.log('endpoint called');
    console.log('body:', JSON.stringify(body, null, 2));
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
