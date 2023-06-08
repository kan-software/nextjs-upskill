import { IBlogPost } from '@/lib/server/models/blog';

export const blogData: IBlogPost[] = [
    {
        postId: 1,
        title: 'First post',
        slug: 'first-post',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat turpis ut luctus elementum. Vestibulum at erat et massa rhoncus pretium at a dui. Aliquam erat volutpat. Aliquam ac justo eu enim sollicitudin viverra id vitae nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus condimentum interdum ligula, in fermentum arcu tempus ut. Aliquam elit sapien, pretium sit amet luctus eget, fermentum sit amet diam. Donec hendrerit ligula leo, eget porttitor ex condimentum id.',
        createdAt: '2023-01-01',
        author: {
            name: 'John Doe'
        }
    },
    {
        postId: 2,
        title: 'Second post',
        slug: 'second-post',
        content: 'Duis vitae lobortis tortor. Nam sit amet ornare dolor. In eget nunc suscipit, scelerisque mauris vel, elementum odio. Mauris placerat eget turpis vel placerat. Suspendisse potenti. Cras pulvinar massa a nibh ultrices ornare. In eu venenatis ex, at suscipit erat. Aenean lacinia nulla a risus rhoncus, nec feugiat metus commodo. In dictum massa in luctus auctor. Morbi ac congue ligula, ut pellentesque lorem. Integer ullamcorper dui a purus vehicula, at interdum arcu bibendum. Phasellus sagittis vel elit vitae ultrices. Fusce consectetur odio urna, vel congue libero laoreet at. Curabitur semper lorem purus, at dictum urna fringilla quis. Nullam ex turpis, dignissim nec pharetra id, vulputate eu urna.',
        createdAt: '2023-01-02',
        author: {
            name: 'John Smith'
        }
    },
    {
        postId: 3,
        title: 'Third post',
        slug: 'third-post',
        content: 'Sed nulla tortor, luctus non enim sed, iaculis molestie erat. Duis quis libero ac massa pulvinar sagittis rutrum eget sem. Nunc in nisl dapibus, ultrices leo eu, sodales risus. Suspendisse ut massa sem. Fusce convallis tincidunt felis, dapibus egestas erat. Aliquam at tellus est. Nullam eu purus posuere arcu pretium laoreet ac eget augue. In hac habitasse platea dictumst. Praesent molestie elit felis, id pharetra libero pulvinar sed. Pellentesque finibus sed leo eu tempor. Cras efficitur ornare ante a consectetur. Nullam commodo fringilla viverra.',
        createdAt: '2023-01-03',
        author: {
            name: 'Jane Doe'
        }
    },
    {
        postId: 4,
        title: 'Fourth post',
        slug: 'fourth-post',
        content: 'Aenean lacinia lectus eget enim tempor egestas. Pellentesque sagittis leo quam, vel ultrices nulla vehicula et. In faucibus lorem sit amet tellus interdum vehicula. Suspendisse eget ante magna. Cras nunc arcu, pellentesque eget finibus vel, scelerisque quis enim. Morbi quis mattis dui, et commodo libero. Vivamus lacinia malesuada velit, non rutrum erat viverra ut. Nam augue sem, vestibulum ut volutpat id, auctor in velit. Nam vel ante eget elit sollicitudin varius in nec enim.',
        createdAt: '2023-01-04',
        author: {
            name: 'Jane Smith'
        }
    },
    {
        postId: 5,
        title: 'Fifth post',
        slug: 'fifth-post',
        content: 'Curabitur elementum a turpis ac mollis. Vivamus viverra nunc quis massa bibendum consequat. Donec aliquam quis nisl ac blandit. In a faucibus dolor. Pellentesque iaculis vehicula massa. In semper odio ante, eget tincidunt est egestas vel. Quisque auctor mattis elit, sit amet ullamcorper magna fermentum vel. Duis condimentum mauris sit amet nunc malesuada, non hendrerit diam aliquet.',
        createdAt: '2023-01-05',
        author: {
            name: 'John Doe'
        }
    },
    {
        postId: 6,
        title: 'Sixth post',
        slug: 'sixth-post',
        content: 'Sed luctus, lacus eu imperdiet pretium, augue risus vehicula erat, tincidunt imperdiet ante massa sed metus. Aliquam dignissim mi ligula, vel bibendum enim tristique vel. Maecenas lobortis fringilla enim vitae rutrum. Ut eu laoreet sem. Vestibulum venenatis risus id mauris ornare, sed posuere lectus auctor. Nam sit amet mauris quis tellus efficitur posuere eu eu enim. Aenean ligula neque, facilisis at scelerisque sed, laoreet ut odio. Nunc risus dolor, congue at augue at, pellentesque congue ligula. Pellentesque ullamcorper leo dui. In dui ipsum, euismod at blandit a, sodales a massa. Fusce a felis eu nunc lobortis maximus.',
        createdAt: '2023-01-06',
        author: {
            name: 'Jane Smith'
        }
    }
]